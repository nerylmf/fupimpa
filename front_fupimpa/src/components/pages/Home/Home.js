import { Atividades } from '../../common/atividades/Atividades';
import '../../common/colors/colors.css';
import { MenuLeft } from '../../common/menuleft/MenuLeft';
import { NavBar } from '../../common/navbar/NavBar';
import './Home.css';

export function Home(){
    return(
        <div className="background-home branco back-preto">
            
            <NavBar></NavBar>
            <div className="container-home">
                <MenuLeft></MenuLeft>
                <Atividades></Atividades>
            </div>
            
        </div>
    );
}