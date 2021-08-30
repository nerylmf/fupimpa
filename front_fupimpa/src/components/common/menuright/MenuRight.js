import { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { Expectativa } from '../../p5/Expectativa';
import { Realidade } from '../../p5/Realidade';
import { AtividadeContext } from '../../pages/PaginaAtividade/PaginaAtividade';
import './MenuRight.css';

export function MenuRight() {
    
    

    return (
        <div className="background-exp-real back-verde">
            <div className="myProgress back-branco">  <div className="myBar" ></div> </div>
            <CardExpectativa 
                title="Expectativa"
            ></CardExpectativa>

            <CardRealidade 
                title="Realidade"
            ></CardRealidade>

            <Comparar></Comparar>

        </div>
    );
}

function CardExpectativa(props) {
    return (

        <div className="card-resultado back-branco">
            <div className="card-text ">
                <span className="resul-title preto">{props.title}</span>
            </div>
            <Expectativa
            ></Expectativa>
        </div>
    )
}

function CardRealidade(props) {

    return (
        <div className="card-resultado back-branco">
            <div className="card-text ">
                <span className="resul-title preto">{props.title}</span>                
            </div>
            <Realidade></Realidade>
        </div>
    )
}





 function Comparar() {

    

    function testar(){
        //props.setExpectativa(props.expectativa + 1);
        //props.setRealidade(props.realidade + 2)
                 
    }

    return(
        <button onClick={testar} className="botao-comparar">
            Comparar
        </button>
    );
}