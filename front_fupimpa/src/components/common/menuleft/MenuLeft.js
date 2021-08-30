
import { Link, NavLink } from 'react-router-dom';
import '../colors/colors.css';
import './menuleft.css';


export function MenuLeft() {
    return (
        <div className="menu-left">
            <NavLink
                exact
                className=" menu-left-button back-laranja"
                // to="/"
                to="/modulo">
                Algorítmo
            </NavLink>
            <NavLink
                exact
                className="menu-left-button back-vermelho"
                to="/modulo/2">
                Expressões
            </NavLink>
            <NavLink
                exact
                className=" menu-left-button back-verde"/*menu-left-button */
                to="/modulo/3">
                Funções
            </NavLink>
            <NavLink
                exact
                className=" menu-left-button back-branco"/*menu-left-button */
                to="/modulo/4">
                Controle de Fluxo
            </NavLink>

        </div>
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

