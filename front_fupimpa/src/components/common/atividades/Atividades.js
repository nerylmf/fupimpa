import { useContext, useEffect, useState } from 'react';
import Sketch from 'react-p5';
import { getAtividades } from '../../../api/auth';
import { AuthContext } from '../../../App';
import history from '../../../history';
import '../colors/colors.css';
import './atividades.css'

export function Atividades(props){ 

    let listAtividades = props.atividades.map(
        (atividade) => (
            <SingleAtividade
                id={atividade.id}
                titulo={atividade.titulo}
                descricao={atividade.descricao}
                resposta={atividade.resposta}
            >                
            </SingleAtividade>
        )
    );    

    
    return (
        <div className="container-atividades preto back-branco">
            {listAtividades}
        </div>
    );
}
       /*  <div className="container-atividades preto back-branco">
            <CardAtividade colorBack="laranja" title="Galinha no tapa" desc="Dona Lourdes é cozinheira do Restaurante..."></CardAtividade>
            <CardAtividade colorBack="laranja" title="Abduzido" desc="Abdu é um alienigena que esta de passeio..."></CardAtividade>
            
            <ListCardAtividade atividades={atividades}></ListCardAtividade>
        
        </div> */
 


/* 
function ListCardAtividade(props){
    let listCard = props.atividades.map(
        (atividade) => {
            <SingleAtividade
                titulo={atividade.titulo}
                descricao={atividade.descricao}
                resposta={atividade.resposta}
            >
            </SingleAtividade>
        }
    );

    console.log(listCard);
    return(
        <div>
            {listCard}
        </div>
    )
} */


export function SingleAtividade(props){
    function foiClicado(){
        history.push("/Atividade/" + props.id);
    }

    let classes = "img-atv back-" + props.colorBack;
    return(
        <div className="card-atividade" onClick={foiClicado}>
            {/* apenas uma imagem de teste */}
            {/* <div className="img-atv back-preto"></div> */}
            <div className={classes}>
                <Sketch 
                    setup = {(p5, canvasParentRef) => {
                        p5.createCanvas(200, 120).parent(canvasParentRef);
                        p5.pixelDensity(1);
                    }}
                    draw = {(p5) => {
                        eval(props.resposta);
                    }}
                    ></Sketch>
            </div>
            <div className="card-text">
                <span className="card-title preto">{props.titulo}</span>
                {/* <p className="card-desc preto">{props.descricao}</p> */}
            </div>
        </div>
    );
}




// import history from '../../../history';
// import '../colors/colors.css';
// import './atividades.css'

// export function Atividades(){
//     return(
//         <div className="container-atividades preto back-branco">
//             <CardAtividade title="Galinha no tapa" desc="Dona Lourdes é cozinheira do Restaurante..."></CardAtividade>
//             <CardAtividade title="Abduzido" desc="Abdu é um alienigena que esta de passeio..."></CardAtividade>
//             <CardAtividade title="A Fuga" desc="Fupimpinha entrou em desespero e começou a correr.."></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
//             <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            
//         </div>
//     );
// }

// export function CardAtividade(props){

//     function foiClicado(){
//         history.push("/Atividade/"+props.title);
//     }

//     return(
//         <div className="card-atividade" onClick={foiClicado}>
//             {/* apenas uma imagem de teste */}
//             <div className="img-atv back-preto"></div>
//             <div className="card-text">
//                 <span className="card-title preto">{props.title}</span>
//                 <p className="card-desc preto">{props.desc}</p>
//             </div>
//         </div>
//     );
// }
