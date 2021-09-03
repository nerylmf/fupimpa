import { MenuRight } from "../../../common/menuright/MenuRight";
import { NavBar } from "../../../common/navbar/NavBar";
import '../../../common/colors/colors.css'
import '../PaginaAtividade.css'
import { Atv1Modulo4 } from "../../../common/AtividadesEspecifica/AtividadesEspecifica";

export function Atividade1Modulo4() {

    return (
        <div className="container-atvX" >
            <div className="conteiner-nav back-preto">
                <NavBar ></NavBar>
                <Atv1Modulo4></Atv1Modulo4>
            </div>
            <MenuRight></MenuRight>

        </div>
    )
}
