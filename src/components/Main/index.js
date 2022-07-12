/*
import './style.css'
import pika from '../../assets/images/pikachu.png'
import pokeBall from '../../assets/images/pokeball.png'
import RocketBall from '../../assets/images/rocketBall.png'
import Button from '../buttons'


function Main() {
    return (
        <main className='container-main'>
            <div className='container-title'>
                <h1 className='titleOne'>Qual Pokemon</h1>
                <h1 className='titleOne'>Você Escolheria?</h1>
                <h2 className='titleTwo'>Você pode saber o tipo de Pokémon, seus pontos</h2>
                <h2 className='titleTwo'>fortes, fracos e habilidades.</h2>
                <Button className='btn'>Veja os pokemons</Button>
                
            </div>
            <div className='container-image'>
                <img height='130px' classname='rocket' src={RocketBall}/>
                <img className='img2' src={pika}/>
                <img className='ball' src={pokeBall}/>
            </div>
        </main>
    )
}

export default Main
*/

import './style.css'
import mew from '../../assets/images/mew.png'
import Card from '../Card'


function Body() {

    return(
        <body>
          <div className='cointaner-body'>
            <div className='titleT'>
                <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
            </div>
            <input placeholder='Pesquise seu Pokemon' className='inp'></input>
            <button className='search'>Pesquisar Pokémon</button>
          </div>
            <div className='imagePoke'>
                <Card img={mew}></Card>
            </div>
        </body>

    )
}

export default Body 




