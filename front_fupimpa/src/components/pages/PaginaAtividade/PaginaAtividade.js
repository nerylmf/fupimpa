import { MenuRight } from "../../common/menuright/MenuRight";
import { NavBar } from "../../common/navbar/NavBar";
import '../../common/colors/colors.css'
import './PaginaAtividade.css'
import { AtividadesEspecifica } from "../../common/atividades/AtividadeEspecifica";

export function PaginaAtividadeX() {

    return (
        <div className="container-atvX" >
            <div className="conteiner-nav back-preto">
                <NavBar ></NavBar>
                <AtividadesEspecifica></AtividadesEspecifica>
            </div>
            <MenuRight></MenuRight>

        </div>
    )
}
