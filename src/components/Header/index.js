import './style.css'
import pokemonLogo from '../../assets/images/pokemon-logo.png'

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className='container-header'>
                <img className='image' src={pokemonLogo} />
                <div className='title'>
                    <Link to="/">Home</Link>
                    <Link to="/pokemons">Pokemons</Link>
                    <h1 className='contact'>Contato</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;