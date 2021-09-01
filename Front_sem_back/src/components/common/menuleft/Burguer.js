
import { Link, NavLink } from 'react-router-dom';
import '../colors/colors.css';
import './menuBurguer.css';


export function Burguer() {

  let button = document.querySelector(".navegador .cab-nav button");
  console.log(button)

  let menu_retratil =document.querySelector(".navegador .menu-retratil");
  console.log(button)

  button.addEventListener("click", function(){
    menu_retratil.classList.toggle("ativo-b");

  })

  return (
     
        // <div className="menu-left">
            <nav className="navegador">
              <div className="cab-nav">
                <h3>Titulo</h3>
                <button className="button">&#9776;</button>
              </div>
              <div className="menu-retratil">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
              </div>
            </nav>
        // </div>
    );
}








///versão 1

// import '../colors/colors.css';
// import './menuleft.css';

// export function MenuLeft(){
//     return(
//         <div className="menu-left">
//             <MenuLeftButton colorBack="laranja" label="Algorítmo"></MenuLeftButton>
//             <MenuLeftButton colorBack="vermelho" label="Expressões"></MenuLeftButton>
//             <MenuLeftButton colorBack="verde" label="Funções"></MenuLeftButton>
//             <MenuLeftButton colorBack="verde" label="Controle de fluxo"></MenuLeftButton>

//         </div>
//     );
// }

// export function MenuLeftButton(props){
//     let classes = "menu-left-button preto back-" + props.colorBack;
//     return(
//         <div className={classes}>
//             {props.label}
//         </div>
//     );
// }

