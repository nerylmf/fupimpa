
import { Link, NavLink } from 'react-router-dom';
import '../colors/colors.css';
import './menuleft.css';

export function MenuLeft() {
    return (
        <div className="menu-left">
            <NavLink
                exact
                className=" menu-left-button back-laranja"/*menu-left-button */
                to="/">
                    Algorítmo
            </NavLink>
            <NavLink
                exact
                className="menu-left-button back-vermelho"/*menu-left-button */
                to="/modulo2">
                    Expressões
            </NavLink>
            <NavLink
                exact
                className=" menu-left-button back-verde"/*menu-left-button */
                to="/modulo3">
                    Funções
            </NavLink>
            <NavLink
                exact
                className=" menu-left-button back-branco"/*menu-left-button */
                to="/modulo4">
                    Controle de Fluxo
            </NavLink>
            {/* <MenuLeftButton colorBack="laranja" label=""></MenuLeftButton>
            <MenuLeftButton colorBack="vermelho" label="Expressões"></MenuLeftButton>
            <MenuLeftButton colorBack="verde" label="Funções"></MenuLeftButton>
            <MenuLeftButton colorBack="verde" label="Controle de fluxo"></MenuLeftButton> */}

        </div>
    );
}

export function MenuLeftButton(props) {
    let classes = "menu-left-button preto back-" + props.colorBack;
    return (
        <div className={classes}>
            {props.label}
        </div>
    );
}











// import { Link, NavLink } from 'react-router-dom';
// import '../colors/colors.css';
// import './menuleft.css';

// export function MenuLeft(){
//     return(
//         <div className="menu-left">
//             <MenuLeftButton rota="modulo1"colorBack="laranja" label="Algorítmo"></MenuLeftButton>
//             <MenuLeftButton colorBack="vermelho" label="Expressões"></MenuLeftButton>
//             <MenuLeftButton colorBack="verde" label="Funções"></MenuLeftButton>
//             <MenuLeftButton colorBack="verde" label="Controle de fluxo"></MenuLeftButton>

//         </div>
//     );
// }

// // export function MenuLeftButton(props){
// //     let classes = "menu-left-button preto back-" + props.colorBack;
// //     return(
// //         <div className={classes}>
// //             {props.label}
// //         </div>
// //     );
// // }

// export function MenuLeftButton(props) {
//     let classes = "menu-left-button  back-" + props.colorBack;
//     return (
//         <div className={classes}>
           
//             <NavLink
//                 exact
//                 className="btn"
//                 to={"/"+props.rota}>
//                 {props.label}
//             </NavLink>
//         </div>
//     );
// }




//v2
// import { useState } from 'react';
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
//     const [setAtivo, setAtivoState]= useState("");

//     function MostrarModulos(){
//         setAtivoState(setAtivo==="" ? "ativo-button":"");
//     }
    


//     let classes = `menu-left-button ${setAtivo} back-` + props.colorBack;
//     return(
//         <div className={classes} onClick={MostrarModulos}>
//             {props.label}
//         </div>
//     );
// }





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
