import { CodeView } from "../../common/menuright/CodeView";
import { NavBar } from "../../common/navbar/NavBar";
import '../../common/colors/colors.css'
import './PaginaAtividade.css'
import { AtividadesEspecifica } from "../../common/AtividadesEspecifica/AtividadesEspecifica";
import { createContext, useContext, useState } from "react";
import { CodeEditor } from "../../common/Editor/Editor";
import vector from './Vector.svg';
import history from "../../../history";
import { useEffect } from "react/cjs/react.development";
import { getAtividadeById } from "../../../api/auth";
import { AuthContext } from "../../../App";

export const AtividadeContext = createContext(null);

export function PaginaAtividadeX(props) {
    
    const [atividade, setAtividade] = useState([]);
    const auth = useContext(AuthContext);

    const [codeExpectativa, setCodeExpectativa] = useState();

    const [codeRealidade, setCodeRealidade] = useState();

    const [codeAtual, setCodeAtual] = useState("p5.background(255, 255, 255);");
    
    let idFromURL = window.location.href.split("/")[4];
    useEffect(() => {
        getAtividadeById({token: auth.token, id: idFromURL}).then(
            (response) => {
                setAtividade(response.data);
                setCodeExpectativa(response.data.resposta);
                setCodeRealidade("p5.background(255, 255, 255);");               
            }
        )
    }, []);

    return (
        <AtividadeContext.Provider value={{
            codeExpectativa: codeExpectativa,
            codeRealidade: codeRealidade,
            setCodeRealidade: setCodeRealidade,
            setCodeExpectativa: setCodeExpectativa,
            codeAtual: codeAtual,
            setCodeAtual: setCodeAtual,
            atividade: atividade,
            setAtividade: setAtividade,
        }}>
            
            <div className="container-atvX" >
                <div className="conteiner-nav back-preto">
                    <NavBar ></NavBar>
                    <div>
                        <div className="atividadeX">
                            <DescAtividade atividade={atividade}></DescAtividade>
                            <Referencias atividade={atividade}></Referencias>
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
            <span className="card-title branco">{props.atividade.titulo}</span>
            <p className="descX branco">{props.atividade.descricao}</p>
            
        </div>

    );
}

function SingleReferencias (props) {

    return(
        <a href="">{props.referencia}</a>
    );
}

function Referencias() {

    let {atividade} = useContext(AtividadeContext);

    //console.log(atividade);

    const [listRef, setListRef] = useState();

    useEffect(() => {
        //setListRef();
    });

    
    

    //let listReferencias = props.referencias.split(",");
    
    /* let newList = listReferencias.map(
        (referencia) => {
            <SingleReferencias
                referencia={referencia}
            >                
            </SingleReferencias>
        });
     */

    return (
        <div className="card-ref back-branco">
            <div className="card-text-ref">
                <span className="title-pequeno preto">Referências</span>
                <ul className="lista-ref">
                    {/* <li className="preto">{props.ref1}</li>
                    <li className="preto">{props.ref2}</li>
                    <li className="preto" >{props.ref3}</li>
                    <li className="preto">{props.ref4}</li>
                    <li className="preto">{props.ref5}</li>
                    <li className="preto">{props.ref6}</li> */}
                    {/* {newList} */}

                </ul>
            </div>
        </div>
    )
}

function Editor() {

    const runCode = () => {
        console.log("rodou");
    }

    return (
        <div className="editor" >
            <div className="arredondar back-branco"></div>
            <div className="editor-cod back-branco">
                {/* <div className="btnAD ">
                    <button  className="btn-aumentar back-branco preto">A-</button>
                    <button className="btn-diminuir back-branco preto">A+</button>
                </div> */}
                <CodeEditor></CodeEditor>
                {/* <div onClick={runCode} className="botao-executar ">             
                    <img src={vector} alt="Botao executar" className="vector-executar" ></img>
                </div> */}
            </div>
            <div className="console">
                <span className="title-pequeno branco">Console  </span>
                <span className="seta branco">&gt;&gt;  </span>

            </div>

        </div>
    )
}


