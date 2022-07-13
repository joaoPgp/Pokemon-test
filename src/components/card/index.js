import './style.css'
import pokemonTypeColors from '../../helpers/pokemonTypeColors';

function Card({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
            <div className='container-card'>    
                <h1 className='name'>{pokemon.name}</h1>
                {
                    pokemon.types.map(type => {
                        return (
                            <h2 className='genre' style={{ backgroundColor: pokemonTypeColors[type.type.name] }}>{type.type.name}</h2>
                           
                        )
                    })
                }
                <h1 className='name'>###</h1>
                <img className='images' src={pokemon.sprites.front_default} alt=""/>
            </div>
        </div>
    )
}

export default Card