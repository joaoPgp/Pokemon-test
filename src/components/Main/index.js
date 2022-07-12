
import './style.css'
import pika from '../../assets/images/pikachu.png'
import pokeBall from '../../assets/images/pokeball.png'
import RocketBall from '../../assets/images/rocketBall.png'
import Button from '../buttons'

import { Link } from "react-router-dom";


function Main() {

    return (
        <main className='container-main'>
            <div className='container-title'>
                <h1 className='titleOne'>Qual Pokemon</h1>
                <h1 className='titleOne'>Você Escolheria?</h1>
                <h2 className='titleTwo'>Você pode saber o tipo de Pokémon, seus pontos</h2>
                <h2 className='titleTwo'>fortes, fracos e habilidades.</h2>
                <Link to="/pokemons">
                    <Button type={'prymari'}>Veja os pokemons</Button>
                </Link>
                
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




