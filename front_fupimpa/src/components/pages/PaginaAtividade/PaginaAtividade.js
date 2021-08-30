import { MenuRight } from "../../common/menuright/MenuRight";
import { NavBar } from "../../common/navbar/NavBar";
import '../../common/colors/colors.css'
import './PaginaAtividade.css'
import { AtividadesEspecifica } from "../../common/AtividadesEspecifica/AtividadesEspecifica";
import { createContext, useState } from "react";

export const AtividadeContext = createContext();

export function PaginaAtividadeX() {

    const [code, setCode] = useState("p5.ellipse(40, 40, 70, 70);");
    const [code_resposta, setCode_resposta] = useState("Resposta");

    return (
        <AtividadeContext.Provider 
            value={{
                code: code,
                setCode: setCode,
                code_resposta: code_resposta,
            }}
        >
            <div className="container-atvX" >
                <div className="conteiner-nav back-preto">
                    <NavBar ></NavBar>
                    <AtividadesEspecifica></AtividadesEspecifica>
                </div>
                <MenuRight></MenuRight>

            </div>
        </AtividadeContext.Provider>
    )
}
