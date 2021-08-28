import { NavBar } from "../../common/navbar/NavBar";
import './PaginaTurmaForum.css';
import '../../common/colors/colors.css'
import balao from './balao.svg';
import coracao from './coracao.svg';


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
                            <Alunos nomeAluno="João"></Alunos>
                            <Alunos nomeAluno="Ana" ></Alunos>

                        </div>
                    </div>
                </div>
                



                <div className="container-forum back-branco">
                    <div className="cab-forum">
                        <span className="title title-f preto">Fórum</span>

                        <a className="botao-perguntar preto back-laranja"> Faça uma pergunta</a>
                    </div>
                    <PerguntasDoForum
                        titleP="Nunc quam nibh tortor quis nisi. Nisl nec fermentum, tristique sit volutpat odio amet. Aliquet nulla
                        gravida tortor praesent dictumst facilisis ut donec."
                        descP="Bibendum erat sed lorem turpis vel aliquam dolor tortor. Odio ut tristique eget ac, at. A arcu sem dictum proin. Felis neque fames semper volutpat velit magnis mi. Egestas ut nisi, orci eu in purus integer nibh. Adipiscing cursus elementum aliquet ultrices mattis tincidunt nibh. Aliquam et in aenean quam neque, viverra purus arcu. Porttitor morbi ut proin a tempus. Ut proin aenean amet etiam quam ac, euismod. Convallis erat molestie tellus gravida facilisis malesuada laoreet...">
                    </PerguntasDoForum>

                    <PerguntasDoForum
                        titleP="Ac ipsum blandit convallis ornare metus. Vehicula risus, velit eros magnis tortor."
                        descP="Purus nibh quam ac tellus consectetur sed amet. Nulla sodales id id tincidunt amet egestas. Ut adipiscing et egestas nullam purus et. Consectetur quisque arcu amet, lectus nulla tristique...">
                    </PerguntasDoForum>

                    <PerguntasDoForum
                        titleP="Ac cras consectetur commodo nunc amet. Integer diam fringilla massa rhoncus tempor ultrices. In facilisi aenean amet, massa maecenas erat."
                        descP="Viverra vel eget etiam vivamus lacus nunc blandit mauris dui. Faucibus eget ultrices quisque sed sed. Non congue vulputate diam amet, tortor. Eu faucibus viverra viverra faucibus feugiat. Tortor sit convallis eu odio nisi, non elit.
                        Nisl a porta pellentesque est lacus quam velit urna donec...">
                    </PerguntasDoForum>

                </div>
            </div>

        </div>
    )
}


