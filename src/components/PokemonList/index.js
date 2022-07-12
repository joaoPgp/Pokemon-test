import './style.css'
import bulbasaur from '../../assets/images/bulbasaur.png'
import charmander from '../../assets/images/charmander.png'
import Card from '../Card'
import Button from '../buttons'
import { useState } from 'react'

function Body() {

    const valor = useState();

    function search() {
        const valorDeBusca = 'mew'
        
    }

    return(
        <body>
          <div className='cointaner-body'>
            <div className='titleT'>
                <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
            </div>
            <input placeholder='Pesquise seu Pokemon' className='inp' onChange={(e) => {console.log(e.target.value)}}></input>
            <Button type={'secundary'} onClick={() => search()}>Pesquisar pokemons</Button>
          </div>
            <div className='imagePoke'>
                <Card type={'name'} img={bulbasaur}></Card>
            </div>
        </body>

    )
}

export default Body 

