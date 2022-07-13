import './style.css'
import { getAllPokemon, getPokemon } from '../../services/pokemon.js';
import Card from '../Card'
import Button from '../buttons'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Body() {
  const [pokemonData, setPokemonData] = useState([]);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl); 
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
    }
    fetchData();
  }, []);


  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

        



    return(
        
        <body>
           
          <div className='cointaner-body'>
            <div className='titleT'>
                <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
            </div>
            <input placeholder='Pesquise seu Pokemon' className='inp' onChange={(e) => {console.log(e.target.value)}}></input>
            <Button type={'secundary'}>Pesquisar pokemons</Button>
          </div>
          <div className='imagePoke'>
            {pokemonData.map((pokemon, i) => 
                <Card key={i} pokemon={pokemon}></Card>)}
            
        </div>
        </body>

    )
}

export default Body 

