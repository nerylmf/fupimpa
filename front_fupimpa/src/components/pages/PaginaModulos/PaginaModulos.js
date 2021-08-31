import { createContext, useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import { getAtividades } from "../../../api/auth";
import { AuthContext } from "../../../App";
import { Atividades } from "../../common/atividades/Atividades";
import { NavBar } from "../../common/navbar/NavBar";

//const ListAtividade = createContext([]);

export function PaginaModulos() {        
    
    const [atividades, setAtividades] = useState([]);
    const {auth} = useContext(AuthContext);
    
    useEffect(() => {
        getAtividades(auth.token).then(
            (response) => {
                setAtividades(response.data);
                
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, []);

    //console.log(atividades);

    /* getAtividades(auth.token).then(
        (response) => {
            setAtividades(response.data);
        }).catch(
            (error) => {
                console.log(error);
            }
        ); */


    return(        
        <div className="background-home branco back-preto">
            <NavBar></NavBar>
            <div className="container-home">
                <Modulos atividades={atividades}></Modulos>
                <Atividades atividades={atividades}></Atividades>
            </div>
        </div>
    );
}


function Modulos(props) {
    //console.log(listModulos);

    let listAtividades = props.atividades.map(
        (atividade) => (atividade.modulo)
    );
    let unique = [...new Set(listAtividades)];

    let listModulos = unique.map(
        (modulo) => (
            <SingleModulo
                titulo={modulo}
            >                
            </SingleModulo>
        )
    );    
    
    return (
        <div className="menu-left">
            {listModulos}
        </div>
    );
}

function SingleModulo(props) {
    return(
        <div className="menu-left-button back-verde">               
            {props.titulo}
        </div>        
    );
}