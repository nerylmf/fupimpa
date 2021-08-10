import history from '../../../history';
import '../colors/colors.css';
import './atividades.css'

export function Atividades(){
    return(
        <div className="container-atividades preto back-branco">
            <CardAtividade title="Galinha no tapa" desc="Dona Lourdes é cozinheira do Restaurante..."></CardAtividade>
            <CardAtividade title="Abduzido" desc="Abdu é um alienigena que esta de passeio..."></CardAtividade>
            <CardAtividade title="A Fuga" desc="Fupimpinha entrou em desespero e começou a correr.."></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            
        </div>
    );
}

export function CardAtividade(props){

    function foiClicado(){
        history.push("/Atividade/"+props.title);
    }

    return(
        <div className="card-atividade" onClick={foiClicado}>
            {/* apenas uma imagem de teste */}
            <div className="img-atv back-preto"></div>
            <div className="card-text">
                <span className="card-title preto">{props.title}</span>
                <p className="card-desc preto">{props.desc}</p>
            </div>
        </div>
    );
}
