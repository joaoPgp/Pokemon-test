import './style.css';


function Button(propriedades) {
   

   return (
      <button className='btn'>{propriedades.children}</button>
   );
}

export default Button;