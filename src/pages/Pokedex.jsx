import "../components/Pokedex/css/Pokedex.css";
import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pokedex = () => {
  const [selectValue, setSelectValue] = useState("all-pokemons");

  const trainerName = useSelector((states) => states.trainerName);

  let url = "https://pokeapi.co/api/v2/pokemon?limit=6200&offset=0";
  const [pokemons, getAllPokemons, hasError, setpokemons] = useFetch(url);
  const urlTypes = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(urlTypes);

  useEffect(() => {
    if (selectValue === "all-pokemons") {
      getAllPokemons();
    } else {
      axios
        .get(selectValue)
        .then((res) => {
          const data = {
            results: res.data.pokemon.map((pokeInfo) => pokeInfo.pokemon),
          };
          setpokemons(data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectValue]);

  useEffect(() => {
    getAllTypes();
  }, []);

  const searchPokemon = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="pokedex__container">
      <div className="poke__header">
        <div className="poke__level-1">
          <div className="poke__content-logo-L1">
            <img className="poke__logo" src="./logo-pokedex.png" alt="" />
          </div>
        </div>
        <div className="poke__level-2">
          <div className="poke__content-logo-L2">
            <img className="poke__icon-2" src="./pokedex-icon2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="poke__cards-header"> 
        <p className="poke__welcome">
          Welcome <span className="poke__trainer-name">{trainerName}</span>, you
          can find your favorite pokemon{" "}
        </p>
        <form className="poke__form-content" onSubmit={handleSubmit}>
          <div className="poke__head-search">
            <div className="poke__search-content">
              <input
                className="poke__input"
                ref={searchPokemon}
                type="text"
                placeholder="Write the pokemon name"
              />
              <button className="poke__btn">Search</button>
            </div>
            <div className="select__content">
            <select className="poke__select" onChange={handleChangeType}>
              <option value="all-pokemons">All pokemons</option>
              {types?.results.map((typeInfo) => (
                <option value={typeInfo.url} key={typeInfo.url}>
                  {typeInfo.name}
                </option>
              ))}
            </select>
            </div>            
          </div>
        </form>
        <PokeContainer pokemons={pokemons?.results} />
      </div>
    </div>
  );
};

export default Pokedex;
