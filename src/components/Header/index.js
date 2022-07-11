import './style.css'
import pokemonLogo from '../../assets/images/pokemon-logo.png'

function Header() {
    return (
        <header>
            <div className='container-header'>
                <img className='image' src={pokemonLogo}/>
                <div className='title'>
                    <h1>Home</h1>
                    <h1>Pokemons</h1>
                    <h1 className='contact'>Contato</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;