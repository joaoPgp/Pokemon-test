import './style.css'

function Card({ img }) {
    return (
        <div>
            <img className='images' src={img}/>
        </div>
    )
}

export default Card