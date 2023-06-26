import { useState } from "react";
import PokeCard from "./PokeCard";
import './css/PokeContainer.css'
import Pagination from "./Pagination";

const PokeContainer = ({ pokemons }) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(8)


  const indexOfLastPost=currentPage * postPerPage;
  const indexOfFirstPost=indexOfLastPost - postPerPage;
  const currentPost = pokemons?.slice(indexOfFirstPost,indexOfLastPost)

  const paginate =(PageNumber)=>setCurrentPage(PageNumber)
    
  return (
    <>
    <Pagination postPerPage={postPerPage} totalPost={pokemons?.length} paginate={paginate} />
    <div className="poke__container">

        {
            currentPost?.map(pokemon =>(
                <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
                />
            ))
        }
    </div></>
  )
}

export default PokeContainer