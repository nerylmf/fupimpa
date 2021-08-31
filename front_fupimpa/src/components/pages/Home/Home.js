import { Atividades } from '../../common/atividades/Atividades';
import '../../common/colors/colors.css';
import { MenuLeft } from '../../common/menuleft/MenuLeft';
import { NavBar } from '../../common/navbar/NavBar';
import './Home.css';
import filtro from './filtro.svg';
import { Galinha } from '../../common/Galinha/Galinha';
import { useEffect, useState } from 'react/cjs/react.development';
import { getAtividades } from '../../../api/auth';


export function Home() {

    const [atividades, setAtividades] = useState(null);

    
    getAtividades().then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
    //console.log(listAtividade);

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
            <div className="galinha-diva">
                <Galinha></Galinha>
            </div>
            {/* <Galinha></Galinha> */}
        </div>
    );
}