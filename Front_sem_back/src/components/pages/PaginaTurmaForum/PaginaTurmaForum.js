import { NavBar } from "../../common/navbar/NavBar";
import './PaginaTurmaForum.css';
import '../../common/colors/colors.css'
import balao from './balao.svg';
import coracao from './coracao.svg';
import history from "../../../history";


function Professor(props) {
    return (
        <div className="prof">
            <div className="img-perfil-turma back-preto"></div>
            <span className=" preto">{props.nomeProf}</span>
        </div>
    )
}
function Alunos(props) {
    let classes = "alunos back-" + props.colorBack;
    return (
        <div className={classes}>
            <div className="img-perfil-turma back-preto"></div>
            <span className="preto">{props.nomeAluno}</span>
        </div>
    )

}

function PerguntasDoForum(props) {
    return (
        <div className="container-pergunta">
            <span className="title-forum">{props.titleP}</span>
            <p className="desc-forum">{props.descP}</p>
            <div className="botoes-forum">
                <img src={balao} alt="Botao comentarios" className="botao-comentarios" ></img>
                <img src={coracao} alt="Botao curtir" className="botao-curtir" ></img>
                <a className="btn-verMais preto back-laranja"> Ver mais</a>

            </div>

        </div>

    )
}



export function PaginaTurmaForum() {
    function foiclicado() {
        console.log("Foi clicado!");
        history.push("/perguntar")
    }
    return (
        <div className="background-turmaForum back-preto">
            <NavBar></NavBar>
            <div className="container-pf">
                <div className="container-participantes back-branco">
                    <div className="PA">
                        <span className="title preto">Participantes</span>

                        <div className="container-prof">
                            <span className="title-pa preto">PROFESSOR</span>
                            <Professor nomeProf="Carlos Josias Viera da Silva"></Professor>

                        </div>
                        <div className="container-alunos">
                            <span className="title-pa preto">ALUNOS</span>
                            <Alunos nomeAluno="Erica"  ></Alunos>
                            <Alunos nomeAluno="Jo??o"></Alunos>
                            <Alunos nomeAluno="Ana" ></Alunos>

                        </div>
                    </div>
                </div>




                <div className="container-forum back-branco">
                    <div className="cab-forum">
                        <span className="title title-f preto">F??rum</span>

                        <a className="botao-perguntar preto back-laranja" onClick={foiclicado}> Fa??a uma pergunta</a>
                    </div>
                    <PerguntasDoForum
                        titleP="Dentro de uma fun????o introduzi este c??digo e por algum motivo n??o esta a somar."
                        descP="var total = (currentUser.profile.hp + currentUser.profile.attack + currentUser.profile.luck) / 3; 
                        a multiplica????o funciona perfeitamente com o caracter '*' ">
                    </PerguntasDoForum>

                    <PerguntasDoForum
                        titleP="Quero adicionar uma tecla no meu c??digo JavaScript no p5.js"
                        descP="Eu tenho essa duas fun????es, por??m, o meu problema ?? na moveRacketE(), eu estou fazendo um ping pong, s?? que eu queria fazer para duas pessoas jogarem, e n??o eu jogar contra o computador, como eu poderia adicionar a tecla W para subir, e a tecla S para descer na fun????o moveRacketE()?">
                    </PerguntasDoForum>

                    <PerguntasDoForum
                        titleP="N??o estou conseguindo resolver a atividade daA Fuga, algu??m poderia me ajudar?"
                        descP="Todas as vezes que eu tento executar a atividade a Galinha n??o sai do lugar">
                    </PerguntasDoForum>

                </div>
            </div>

        </div>
    )
}


