import { CodeView } from "../../common/menuright/CodeView";
import { NavBar } from "../../common/navbar/NavBar";
import '../../common/colors/colors.css'
import './PaginaAtividade.css'
import { AtividadesEspecifica } from "../../common/AtividadesEspecifica/AtividadesEspecifica";
import { createContext, useState } from "react";
import { CodeEditor } from "../../common/Editor/Editor";
import vector from './Vector.svg';

export const AtividadeContext = createContext(null);

export function PaginaAtividadeX() {    

    const [codeExpectativa, setCodeExpectativa] = useState(`
        p5.background(255, 255, 255);        
        p5.noStroke();

        p5.fill(30,200,50);
        p5.ellipse(50,50,50,50);
        p5.fill(200,30,50);
        p5.ellipse(250,250,50,50);
        p5.fill(30,50,200);
        p5.ellipse(150,150,50,50);
    `);

    const [codeRealidade, setCodeRealidade] = useState(`
        p5.background(255, 255, 255); 
        //p5.ellipse(150,150,150,150);
    `);

    const [codeAtual, setCodeAtual] = useState(`
        p5.background(255, 255, 255); 
        p5.ellipse(150,150,150,150);
    `);

    

    return (
        <AtividadeContext.Provider value={{
            codeExpectativa: codeExpectativa,
            codeRealidade: codeRealidade,
            codeAtual: codeAtual,
            setCodeAtual: setCodeAtual,
        }}>
            <div className="container-atvX" >
                <div className="conteiner-nav back-preto">
                    <NavBar ></NavBar>
                <div>
                <div className="atividadeX">
                    <DescAtividade></DescAtividade>
                    <Referencias></Referencias>
                </div>
            <Editor></Editor>

        </div>
                </div>
                <CodeView></CodeView>
            </div>
        </AtividadeContext.Provider>
    )
}





function DescAtividade(props) {
    return (
        <div className="conteiner-descricao">
            <span className="card-title branco">{props.title}</span>
            <p className="descX branco">{props.desc}</p>
            <div className="desc-instrucao branco">
                <span className="title-instrucao branco">{props.titleInstrucao}</span>

                <ul className="lista-top">
                    <li>{props.topico1}</li>
                    <li>{props.topico2}</li>
                    <li>{props.topico3}</li>
                </ul>
            </div>
        </div>

    );
}

function Referencias(props) {
    return (
        <div className="card-ref back-branco">
            <div className="card-text-ref">
                <span className="title-pequeno preto">Referências</span>
                <ul className="lista-ref">
                    <li className="preto">{props.ref1}</li>
                    <li className="preto">{props.ref2}</li>
                    <li className="preto" >{props.ref3}</li>
                    <li className="preto">{props.ref4}</li>
                    <li className="preto">{props.ref5}</li>
                    <li className="preto">{props.ref6}</li>

                </ul>
            </div>
        </div>
    )
}

function Editor() {
    return (
        <div className="editor" >
            <div className="arredondar back-branco"></div>
            <div className="editor-cod back-branco">
                {/* <div className="btnAD ">
                    <button  className="btn-aumentar back-branco preto">A-</button>
                    <button className="btn-diminuir back-branco preto">A+</button>
                </div> */}
                <CodeEditor></CodeEditor>
                <div className="botao-executar ">             
                    <img src={vector} alt="Botao executar" className="vector-executar" ></img>
                </div>
            </div>
            <div className="console">
                <span className="title-pequeno branco">Console  </span>
                <span className="seta branco">&gt;&gt;  </span>

            </div>

        </div>
    )
}
