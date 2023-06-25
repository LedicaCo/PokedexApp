import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
/* import Loading from "../components/Pokedex/Loading"; */


const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError,] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);


  return (
    <>
    <div className="poke__wanted-content">
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

      {hasError ? (
        <>
          <div className="msg__not-found-content">
            <i className="bx bx-error"></i>
            <h2 className="msg__not-found">
              The pokemon <span className="poke__name-error">{name}</span> was
              not found
            </h2>
          </div>
          <div className="return__content">
            <a className="poke__return" href="pokedex#/pokedex">
              Go back <i className="bx bx-left-arrow-circle"></i>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="poke__artwork-content">
            {" "}
            <div
              className={`poke__head-img  bg-${pokemon?.types[0].type.name}`}
            >
              <img
                className="poke__image"
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>
            <div className="poke-hr__container">
              <hr className="poke__left" />
              <h2 className="poke__name">{pokemon?.name}</h2>
              <hr className="poke__right" />
            </div>
            <div className="poke__body-stats">
              <ul className="poke__body-list">
                <li className="poke__body-item">
                  <span className="poke__body--stats">Weight</span>
                  <span className="poke__body--value">{pokemon?.weight}</span>
                </li>
                <li className="poke__body-item">
                  <span className="poke__body--stats">Height</span>
                  <span className="poke__body--value">{pokemon?.height}</span>
                </li>
              </ul>
            </div>
            <section className="poke__frame-1">
              <div className="poke__detail">
                <div className="poke__column-1">
                  <div className="poke__type-title">
                    <span className="type__title">Type</span>
                  </div>
                  <div className="poke__types">
                    <div className="poke__type-1">
                      <span className="poke__type">
                        {pokemon?.types[0].type.name}
                      </span>
                    </div>
                    <div className="poke__type-2">
                      <span className="poke__type">
                        {pokemon?.types[1].type.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="poke__column-1">
                  <div className="poke__skill-title">
                    <span className="skill__title">Skills</span>
                  </div>
                  <div className="poke__skills">
                    <div className="poke__skill-1">
                      <span className="poke__skill">
                        {pokemon?.abilities[0].ability.name}
                      </span>
                    </div>
                    <div className="poke__skill-2">
                      <span className="poke__skill">
                        {pokemon?.abilities[1].ability.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="poke__stats-content">
              <div className="poke__stats">
                <h2>Stats</h2>
                <hr className="divider" />
                <img
                  className="poke__icon-232"
                  src="../..icon-group-232.png"
                  alt=""
                />
              </div>
              <div className="stats__container">
                <div className="poke__stats-span">
                  <span className="poke__stats-label">
                    {pokemon?.stats[0].stat.name}
                  </span>
                  <span className="poke__stats-value">
                    {pokemon?.stats[0].base_stat}/150
                  </span>
                </div>
                <progress
                  className="poke__bar-progress"
                  max="150"
                  value={pokemon?.stats[0].base_stat}
                ></progress>
              </div>
              <div className="stats__container">
                <div className="poke__stats-span">
                  <span className="poke__stats-label">
                    {pokemon?.stats[1].stat.name}
                  </span>
                  <span className="poke__stats-value">
                    {pokemon?.stats[1].base_stat}/150
                  </span>
                </div>
                <progress
                  className="poke__bar-progress"
                  max="150"
                  value={pokemon?.stats[1].base_stat}
                ></progress>
              </div>
              <div className="stats__container">
                <div className="poke__stats-span">
                  <span className="poke__stats-label">
                    {pokemon?.stats[2].stat.name}
                  </span>
                  <span className="poke__stats-value">
                    {pokemon?.stats[2].base_stat}/150
                  </span>
                </div>
                <progress
                  className="poke__bar-progress"
                  max="150"
                  value={pokemon?.stats[2].base_stat}
                ></progress>
              </div>
              <div className="stats__container">
                <div className="poke__stats-span">
                  <span className="poke__stats-label">
                    {pokemon?.stats[5].stat.name}
                  </span>
                  <span className="poke__stats-value">
                    {pokemon?.stats[5].base_stat}/150
                  </span>
                </div>
                <progress
                  className="poke__bar-progress"
                  max="150"
                  value={pokemon?.stats[5].base_stat}
                ></progress>
              </div>
              <section className="poke_movements-container">
                <div className="poke__movements">
                  <div className="poke__stats">
                    <h2>Movements</h2>
                    <hr className="divider" />
                    <img
                      className="poke__icon-232"
                      src="./icon-group-232.png"
                      alt=""
                    />
                  </div>
                </div>
                <ul className="poke__moves">
                  {pokemon?.moves.map((moveInfo) => (
                    <li className="poke__moves-item" key={moveInfo.move.url}>
                      {moveInfo.move.name}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="poke__go-back">
                <div className="return__content">
                  <a className="poke__return" href="pokedex#/pokedex">
                    Go back <i className="bx bx-left-arrow-circle"></i>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default PokedexName;
