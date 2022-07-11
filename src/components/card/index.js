import './style,css'
import Bulbasaur from '../../assets/images/bulbasaur.png'
function Card() {
    return(
        <card>
            <div>
                <img className='img' src={Bulbasaur}/>
            </div>
        </card>
    )
}

export default Card