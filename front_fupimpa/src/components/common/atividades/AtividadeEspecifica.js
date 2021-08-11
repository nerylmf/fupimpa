import '../colors/colors.css';
import { CodeEditor } from '../Editor/Editor';
import './atividades.css'

export function AtividadesEspecifica() {
    return (
        <div>
            <div className="atividadeX">
                <DescAtividade
                    title="Cozinhando na base do tapa"
                    desc="Dona Lourdes é cozinheira do Restaurante Universitário na UFC Campus Quixadá. Certo dia, na hora do almoço, mas aquele não era seu dia de sorte, o gás acabou. Dona Lourdes foi dar a notícia que não tinha como cozinhar frangos, todo mundo indignado, até que um rapaz surge dizendo ter a solução, cozinhar o frango na base do tapa. Todo mundo riu do rapaz e disse que era impossível, porque na verdade é mesmo, ou será que não?"
                    titleInstrucao="Você precisa ajudar o rapaz a cozinhar frangos para todos os alunos."
                    topico1=" Cada tapa aumenta a temperatura do frango;"
                    topico2="O frango deve estar numa determinada temperatura para servir;"
                    topico3=" A velocidade do tapa é diretamente proporcional ao ganho de temperatura."
                >
                </DescAtividade>
                <Referencias
                    ref1="setup()"
                    ref2="createCanvas()"
                    ref3="draw()"
                    ref4="if()"
                    ref5="else()"
                    ref6="ellipse()"
                    ref7="fill()">

                </Referencias>
            </div>
            <Editor></Editor>

        </div>

    );
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
            <div className="card-text">
                <span className="title-pequeno preto">Referências</span>
                <ul className="lista-ref">
                    <li>{props.ref1}</li>
                    <li>{props.ref2}</li>
                    <li>{props.ref3}</li>
                    <li>{props.ref4}</li>
                    <li>{props.ref5}</li>
                    <li>{props.ref6}</li>
                    <li>{props.ref7}</li>
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
                <CodeEditor></CodeEditor>
            </div>
            <div className="console"><span className="title-pequeno branco">Console</span></div>

        </div>
    )
}

