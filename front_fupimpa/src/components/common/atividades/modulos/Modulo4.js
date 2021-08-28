import { MenuLeft } from '../../menuleft/MenuLeft';
import { NavBar } from '../../navbar/NavBar';
import { CardAtividade } from '../Atividades';
import '../../colors/colors.css';
import '../atividades.css'
import '../../../pages/Home/Home.css';
import filtro from '../../../pages/Home/filtro.svg';


export function AtividadesModulo4(){
    return(
        <div className="container-atividades preto back-branco">

            
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
                    <img src={filtro} className="filtro-dropdown" alt="Botao filtrar"  ></img>


                </div>
            </div>
        </div>
    );
}

