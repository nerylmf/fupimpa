import '../colors/colors.css';
import './atividades.css'

export function Atividades(){
    return(
        <div className="container-atividades preto back-branco">
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
        </div>
    );
}

export function CardAtividade(props){
    return(
        <div className="card-atividade">
            {/* apenas uma imagem de teste */}
            <div className="img-atv back-preto">asdsa</div>
            <div className="card-text">
                <span className="card-title preto">{props.title}</span>
                <p className="card-desc preto">{props.desc}</p>
            </div>
        </div>
    );
}
