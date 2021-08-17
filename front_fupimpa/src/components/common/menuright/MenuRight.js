import { useState } from 'react';
import { Expectativa } from '../../p5/Expectativa';
import { Realidade } from '../../p5/Realidade';
import './MenuRight.css';

export function CardExpectativa(props) {
    return (

        <div className="card-resultado back-branco">
            <div className="card-text ">
                <span className="resul-title preto">{props.title}</span>
            </div>
            <Expectativa
                expectativa={props.expectativa}
                setExpectativa={props.setExpectativa}
            ></Expectativa>
        </div>
    )
}

export function CardRealidade(props) {

    return (
        <div className="card-resultado back-branco">
            <div className="card-text ">
                <span className="resul-title preto">{props.title}</span>                
            </div>
            <Realidade
                realidade={props.realidade}
                setRealidade={props.setRealidade}
            ></Realidade>
        </div>
    )
}


export function MenuRight() {
    const [realidade, setRealidade] = useState(0);
    const [expectativa, setExpectativa] = useState(0);
    //console.log(realidade);

    return (
        <div className="background-exp-real back-verde">

            <CardExpectativa 
                title="Expectativa"                
                expectativa={expectativa}
                setExpectativa={setExpectativa}
            ></CardExpectativa>

            <CardRealidade 
                title="Realidade" 
                realidade={realidade}
                setRealidade={setRealidade} 
            ></CardRealidade>

            <Comparar 
                realidade={realidade}
                setRealidade={setRealidade}   
                
                expectativa={expectativa}
                setExpectativa={setExpectativa}
            ></Comparar>

        </div>
    );
}


export function Comparar(props) {
    function testar(){
        //props.setExpectativa(props.expectativa + 1);
        //props.setRealidade(props.realidade + 2)
        console.log(props.realidade); 
        console.log(props.expectativa);            
    }

    return(
        <button onClick={testar} className="botao-comparar">
            Comparar
        </button>
    );
}