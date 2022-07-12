import './style.css';


function Button({type, children, onClick}) {
   const className = 'btn btn-' + type;
   

   return (
      <button className={className} onClick={onClick}>{children}</button>
   );
}

export default Button;