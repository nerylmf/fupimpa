import { MenuLeft } from '../../menuleft/MenuLeft';
import { NavBar } from '../../navbar/NavBar';
import { CardAtividade } from '../Atividades';
import '../../colors/colors.css';
import '../atividades.css'
import '../../../pages/Home/Home.css';
import filtro from '../../../pages/Home/filtro.svg';


export function AtividadesModulo3(){
    return(
        <div className="container-atividades preto back-branco">
            <CardAtividade colorBack="verde"  title="Modulo 3" desc="Dona Lourdes é cozinheira do Restaurante..."></CardAtividade>
            <CardAtividade colorBack="verde" title="Modulo 3" desc="Abdu é um alienigena que esta de passeio..."></CardAtividade>
            <CardAtividade colorBack="verde" title="Modulo 3" desc="Fupimpinha entrou em desespero e começou a correr.."></CardAtividade>
            <CardAtividade colorBack="verde" title="Modulo 3" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="verde" title="Modulo 3" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            <CardAtividade colorBack="verde" title="Modulo 3" desc="asd fasd asdfa sdfasdfas dba ajahb dvjh"></CardAtividade>
            
            
        </div>
    );
}

export function Modulo3() {
    return (
        <div className="background-home branco back-preto">

            <NavBar></NavBar>
            <div className="container-home">
                <MenuLeft></MenuLeft>
                <AtividadesModulo3></AtividadesModulo3>
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

