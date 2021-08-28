import { MenuLeft } from '../../menuleft/MenuLeft';
import { NavBar } from '../../navbar/NavBar';
import { CardAtividade } from '../Atividades';
import '../../colors/colors.css';
import '../atividades.css'
import '../../../pages/Home/Home.css';
import filtro from '../../../pages/Home/filtro.svg';


export function AtividadesModulo2(){
    return(
        <div className="container-atividades preto back-branco">
            <CardAtividade colorBack="vermelho" title="Modulo 2 " desc="Dona Lourdes é cozinheira do Restaurante..."></CardAtividade>
            <CardAtividade colorBack="vermelho" title="Modulo 2" desc="Abdu é um alienigena que esta de passeio..."></CardAtividade>
            <CardAtividade colorBack="vermelho" title="Modulo 2" desc="Fupimpinha entrou em desespero e começou a correr.."></CardAtividade>
            <CardAtividade colorBack="vermelho" title="Modulo 2" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="Modulo 2" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="Modulo 2" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="vermelho" title="OPA" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            
        </div>
    );
}

export function Modulo2() {
    return (
        <div className="background-home branco back-preto">

            <NavBar></NavBar>
            <div className="container-home">
                <MenuLeft></MenuLeft>
                <AtividadesModulo2></AtividadesModulo2>
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

