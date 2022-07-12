import './style.css'

function Card({ img }) {
    return (
        <div>
            <div className='container-card'>    
                <h1 className='name'>Bulbasaur</h1>
                <h2 className='genre'>Planta</h2>
                <h2 className='genre'>Venenoso</h2>
                <h1 className='name'>#001</h1>
                <img className='images' src={img}/>
            </div>

            <div className='container-cardSecondary'>
                <h1 className='nameSecondary'>Charmander</h1>
                <h2 className='genreSecondary'>Fogo</h2>
                <h2 className='genreSecondary'>Fogo</h2>
                <h1 className='nameSecondary'>#002</h1>
                <img className='images' src={img}/>
            </div> 
        </div>
    )
}

export default Card