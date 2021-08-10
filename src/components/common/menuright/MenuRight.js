import './MenuRight.css';

export function CardResultadoAtv(props) {
    return (

        <div className="card-resultado back-branco">
            <div className="card-text ">
                <span className="resul-title preto">{props.title}</span>
            </div>
        </div>
    )
}
export function MenuRight() {
    return (
        <div className="background-exp-real back-verde">
            <CardResultadoAtv title="Expectativa"></CardResultadoAtv>
            <CardResultadoAtv title="Realidade" ></CardResultadoAtv>

        </div>
    );
}


