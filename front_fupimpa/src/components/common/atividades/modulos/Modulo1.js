
import { MenuLeft } from '../../menuleft/MenuLeft';
import { NavBar } from '../../navbar/NavBar';
import { SingleAtividade } from '../Atividades';
import '../../colors/colors.css';
import '../atividades.css'
import '../../../pages/Home/Home.css';
import filtro from '../../../pages/Home/filtro.svg';


export function Atividades(){
    return(
        <div className="container-atividades preto back-branco">
            <SingleAtividade colorBack="laranja" title="Galinha no tapa" desc="Dona Lourdes é cozinheira do Restaurante..."></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="Abduzido" desc="Abdu é um alienigena que esta de passeio..."></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="A Fuga" desc="Fupimpinha entrou em desespero e começou a correr.."></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            <SingleAtividade colorBack="laranja" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></SingleAtividade>
            
        </div>
    );
}

export function Modulo1() {
    return (
        <div className="background-home branco back-preto">

            <NavBar></NavBar>
            <div className="container-home">
                <MenuLeft></MenuLeft>
                <Atividades></Atividades>
            </div>
            <div className='container-filtro'>
                <div class="botao-filtrar">
                    <div class="container-dropdown back-preto">
                        <a className="link-filtro branco" href="">Concluidas</a>
                        <a className="link-filtro branco" href="">Corrigidas</a>
                        <a className="link-filtro branco" href="">Iniciadas</a>
                    </div>
                    <img src={filtro} className="filtro-dropdown" alt="Botao filtrar"  ></img>


                </div>
            </div>
        </div>
    );
}

