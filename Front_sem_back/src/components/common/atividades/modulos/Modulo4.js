import { MenuLeft } from '../../menuleft/MenuLeft';
import { NavBar } from '../../navbar/NavBar';
// import { CardAtividade } from '../Atividades';
import '../../colors/colors.css';
import '../atividades.css'
import '../../../pages/Home/Home.css';
import filtro from '../../../pages/Home/filtro.svg';
import history from '../../../../history';


export function AtividadesModulo4() {
    
    return (
        <div className="container-atividades preto back-branco">
            <CardAtividade colorBack="pretoClaro" title="Vai virar jacaré?" desc="Renekton já viveu muitas aventuras por sua vida..."></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fas asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="pretoClaro" title="Modulo 4" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>            


        </div>
    );
}
export function CardAtividade(props){

    function foiclicado() {
        history.push("/atv1Modulo4")
    }

    let classes = "img-atv back-" + props.colorBack;
    return(
        <div className="card-atividade" onClick={foiclicado}>
            {/* apenas uma imagem de teste */}
            {/* <div className="img-atv back-preto"></div> */}
            <div className={classes}></div>
            <div className="card-text">
                <span className="card-title preto">{props.title}</span>
                <p className="card-desc preto">{props.desc}</p>
            </div>
        </div>
    );
}




export function Modulo4() {
    return (
        <div className="background-home branco back-preto">

            <NavBar></NavBar>
            <div className="container-home">
                <MenuLeft></MenuLeft>
                <AtividadesModulo4></AtividadesModulo4>
            </div>
            <div className='container-filtro'>
                <div class="botao-filtrar">
                    <div class="container-dropdown back-preto">
                        <a className="link-filtro branco" href="">Concluidas</a>
                        <a className="link-filtro branco" href="">Corrigidas</a>
                        <a className="link-filtro branco" href="">Iniciadas</a>
                    </div>
                    <img src={filtro} className="filtro-dropdown" alt="Botao filtrar" ></img>


                </div>
            </div>
        </div>
    );
}




// export function AtividadesEspecifica() {
//     return (
//         <div>
//             <div className="atividadeX">
//             </DescAtividade>
//                 <Referencias
//                     ref1="setup()"
//                     ref2="createCanvas()"
//                     ref3="draw()"
//                     ref4="if()"
//                     ref5="else()"
//                     ref6="ellipse()"
//                     ref7="fill()">

//                 </Referencias>

//                 <DescAtividade
//                     title="Vai virar jacaré?"
//                     desc="Renekton já viveu muitas aventuras por sua vida, inclusive fatos históricos, quando naquela noite viu pela televisão o muro de Berlim cair, ele nunca esqueceu.Os anos se passaram e chegou a pandemia de Covid-19, mais um fato histórico na vida dele. Em Julho de 2021, a cidade de Shurima está vacinando sua população a todo vapor, e Renekton, morador da cidade, adoraria tomar sua primeira dose. Para saber se poderia, ele foi ao postinho de saúde."
//                     titleInstrucao="Ajude Renekton saber se ele poderá tomar a vacina"
//                     topico1=" Shurima está vacinando a faixa etária de 35 a 45 anos."
//                     topico2="Se a pessoa estiver acima da faixa etária, deve ser alertada que já deveria ter se vacinado há algum tempo"
//                     topico3=" Se a pessoa estiver dentro da faixa etária, ela poderá tomar a vacina"
//                 >
//                 </DescAtividade>
//                 <Referencias
//                     ref1="setup()"
//                     ref2="createCanvas()"
//                     ref3="draw()"
//                     ref4="if()"
//                     ref5="else()"
//                     ref6="ellipse()"
//                     ref7="fill()">

//                 </Referencias>
//                 <div>
//             </div>
//             <Editor></Editor>

//         </div>

//     );
// }

