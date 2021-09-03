import '../colors/colors.css';
import fechar from './iconFechar.svg';
import galinhaCompleta from './galinhaCompleta.svg';
import './Galinha.css'
import history from '../../../history';

export function Galinha() {
    function foiclicado() {
        console.log("Foi clicado!");
        history.push("/modulo")
    }

    return (
        <div className="centrar-pg">
        <div className="container-galinha">
            <div className="botao-fechar">
                <img src={fechar} alt="Galinha Fupimpa" className="x" onClick={foiclicado}></img>

            </div>
            <div className="galinha-imgs" >
                    <img src={galinhaCompleta} alt="Galinha Fupimpa" className="galinha" ></img>
                    
            </div>

            
        </div>
        </div>
    )
}

