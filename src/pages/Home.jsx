import '../components/Pokedex/css/Home.css'
import { useRef } from "react";
import { setTrainerNameG } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    
    const trainerNameRef = useRef()
    
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
        navigate('/pokedex')        
    }
    
  return (
    <div className="pokedex__home-container">
      <div className="pokedex__banner">
        <img className='pokedex__image' src="./logo-pokedex.png" width={250} alt="" />
      </div>
      <h2 className="pokedex__greeting">¡Hi Trainer!</h2>
      <p className="pokedex__msg">To start in this application please give me your trainer name</p>
      <form className="pokedex__form" onSubmit={handleSubmit}>
        <input className="pokedex__input" ref={trainerNameRef} type="text" placeholder="Write your Trainer name" />
        <button className="pokedex__button">Cathc then all!</button>
      </form>
      <footer className='pokedex__footer'>
      <div className='pokedex__footer-level-1'>
      <img className='pokedex__icon2' src="./pokedex-icon2.png" alt="" />
      </div>
      <div className='pokedex__footer-level-2'></div> 
      </footer>
    </div>
  );
};

export default Home;
