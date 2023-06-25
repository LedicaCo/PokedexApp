import PokeCard from "./PokeCard";
import './css/PokeContainer.css'

const PokeContainer = ({ pokemons }) => {
    
  return (
    <div className="pokemon__cards">
    {
        pokemons?.map(pokemon => (
            <PokeCard 
            key={pokemon.url}
            url={pokemon.url}            
            />            
        ))
    }
    </div>
  )
}

export default PokeContainer