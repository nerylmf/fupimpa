import { useState } from 'react';
import Sketch from 'react-p5';
import { useContext, useEffect } from 'react/cjs/react.development';
import { Expectativa } from '../../p5/Expectativa';
import { Realidade } from '../../p5/Realidade';
import { AtividadeContext } from '../../pages/PaginaAtividade/PaginaAtividade';
import './CodeView.css';

export function CodeView(props) {

    const contextAtividade = useContext(AtividadeContext);
    const [ acertoAtual, setAcertoAtual ] = useState(0);    

    //console.log(contextAtividade);
    
    const width = 300;
    const height = 250;

    let pixels_expectativa = [];
    let pixels_realidade = [];

    let pixels_corretos = 0;

    const setup_expectativa = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);        
        p5.pixelDensity(1);

    }
    const draw_expectativa = (p5) => {
        eval(contextAtividade.codeExpectativa);

        p5.loadPixels();
        pixels_expectativa = p5.pixels;
    }

    const setup_realidade = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.pixelDensity(1);
    }
    const draw_realidade = (p5) => {
        try{
            eval(contextAtividade.codeRealidade);
        }
        catch (e) {
        }     

        p5.loadPixels();
        pixels_realidade = p5.pixels;
        //p5.noLoop();
    }

    const comparar = () => {
        const qtdPixels = width * height;
        pixels_corretos = 0;
        
        for (let i = 0; i < 4 * qtdPixels; i += 4) {
            //if(pixels_realidade[i, j] === pixels_expectativa[i, j])
            //console.log(i)                 
            if(
                pixels_realidade[i] === pixels_expectativa[i] &&
                pixels_realidade[i + 1] === pixels_expectativa[i + 1] &&
                pixels_realidade[i + 2] === pixels_expectativa[i + 2]
            ) {pixels_corretos += 1;}  
                        
        }          
        
        let acerto = pixels_corretos / qtdPixels * 100;
        console.log("Acerto: " + acerto + "%");     
        setAcertoAtual(acerto);
        
        
        /* console.log(pixels_corretos);
        console.log(pixels_realidade);
        console.log(pixels_expectativa); */

    }

    return (
        <div className="background-exp-real back-verde" >
            <span className="resul-title preto">{acertoAtual.toFixed()}%</span>
            <div className="myProgress back-branco">
                <div className="myBar" style={{width: "" + acertoAtual + "%"}}></div> 
            </div>

            <span className="resul-title preto">Expectativa</span>
            <div className="expectativa">                
                <Sketch setup={setup_expectativa} draw={draw_expectativa}/>
            </div>
            <span className="resul-title preto">Realidade</span>
            <div className="realidade">
                
                <Sketch setup={setup_realidade} draw={draw_realidade}/>
            </div>
            <button className="button-comparar back-preto resul-title branco" onClick={comparar}>
                Comparar
            </button>
            {/* <CardExpectativa 
                title="Expectativa"
            ></CardExpectativa>

            <CardRealidade 
                title="Realidade"
            ></CardRealidade>

            <Comparar></Comparar> */}

        </div>
    );
}



















/* 


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
} */