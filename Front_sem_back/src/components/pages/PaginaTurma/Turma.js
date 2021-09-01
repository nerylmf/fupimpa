import { NavBar } from "../../common/navbar/NavBar";
import './turma.css';
import '../../common/colors/colors.css'
import accordion from './icon-accordion.svg';
import React, { useState, useRef } from 'react';
import IconAccordion from "./iconAccordion";
import { NavLink } from "react-router-dom";



export function Turma() {
    return (
        <div className="background-turma back-preto">
            <NavBar></NavBar>
            <div className="turmas back-branco">
                <div className="conteiner-turmas coluna">
                    <CardTurma disciplina="Fundamentos de Programação" professor="Carlos Josias Viera da Silva" turma="Turma 02a"></CardTurma>
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 02b"></CardTurma>
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 01a"></CardTurma>
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 01b"></CardTurma>

                </div>
                <div className="conteiner-turmas coluna">
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 03a"></CardTurma>
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 03b"></CardTurma>
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 04a"></CardTurma>
                    <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 04b"></CardTurma>
                </div>
            </div>

        </div>
    )
}




function CardTurma(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion-icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "ativo" : "");
        setHeightState(
            setActive === "ativo" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "ativo" ? "accordion-icon" : "accordion-icon rotate"
        );
        console.log(content.current.scrollHeight);

    }


    return (
        <div className="conteiner-cardsTurma" >
            <div className="accordion-section">
                <div className={` card-turma ${setActive}`} onClick={toggleAccordion}>

                    <div className="img-perfil back-vermelho"></div>
                    <div className="infor-turma preto">
                        <span className="texto ">{props.disciplina}</span>
                        <span className="texto ">{props.professor}</span>
                        <span className="texto ">{props.turma}</span>
                    </div>

                    <IconAccordion className={`${setRotate} botao-accordion`} />
                </div>
                <div ref={content} style={{ maxHeight: `${setHeight}` }} className="card-accordion back-verde">
                    <div>
                        <form className="form-turma">
                            <input className="chave" type="text" name="campo-chave" placeholder="Insira a chave da turma"></input>
                            
                            <NavLink
                                exact
                                className="entrar-turma preto"
                                to="/turmaForum">
                                Entrar
                            </NavLink>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardTurma;






// import { NavBar } from "../../common/navbar/NavBar";
// import './turma.css';
// import '../../common/colors/colors.css'
// import accordion from './icon-accordion.svg';
// import React, { useState, useRef } from 'react';
// import IconAccordion from "./iconAccordion";



// export function Turma() {
//     return (
//         <div className="background-turma back-preto">
//             <NavBar></NavBar>
//             <div className="turmas back-branco">
//                 <div className="conteiner-turmas coluna direita">
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Carlos Josias Viera da Silva" turma="Turma 02a"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 02b"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 01a"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 01b"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 03a"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 03b"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 04a"></CardTurma>
//                     <CardTurma disciplina="Fundamentos de Programação" professor="Nome do Professor(a)" turma="Turma 04b"></CardTurma>
//                 </div>
//             </div>






//         </div>
//     )
// }




// function CardTurma(props) {
//     const [setActive, setActiveState] = useState("");
//     const [setHeight, setHeightState] = useState("0px");
//     const [setRotate, setRotateState] = useState("accordion__icon");

//     const content = useRef(null);

//     function toggleAccordion() {
//         setActiveState(setActive === "" ? "ativo" : "");
//         setHeightState(
//             setActive === "ativo" ? "0px" : `${content.current.scrollHeight}px`
//         );
//         setRotateState(
//             setActive === "ativo" ? "accordion__icon" : "accordion__icon rotate"
//         );
//         console.log(content.current.scrollHeight);

//     }


//     return (
//         <div className="conteiner-cardsTurma" >
//             <div className="accordion__section">
//                 <div className={` card-turma ${setActive}`} onClick={toggleAccordion}>

//                     <div className="img-perfil back-vermelho"></div>
//                     <div className="infor-turma preto">
//                         <span className="texto ">{props.disciplina}</span>
//                         <span className="texto ">{props.professor}</span>
//                         <span className="texto ">{props.turma}</span>
//                     </div>

//                     <IconAccordion className={`${setRotate} botao-accordion`} />
//                 </div>
//                 <div ref={content} style={{ maxHeight: `${setHeight}` }} className="card-accordion back-verde">
//                     <div>
//                         <form className="form-turma">
//                             <input className="chave" type="text" name="campo-chave"  placeholder="Insira a chave da turma"></input>
//                             <button className="entrar-turma preto">Entrar</button>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CardTurma;








