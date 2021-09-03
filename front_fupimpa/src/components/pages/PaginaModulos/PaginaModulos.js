import { createContext, useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import { getAtividadePorModulo, getAtividades } from "../../../api/auth";
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
                <Modulos atividades={atividades} setAtividades={setAtividades}></Modulos>
                <Atividades atividades={atividades}></Atividades>
            </div>
        </div>
    );
}


function Modulos(props) {
    //console.log(listModulos);

    const [modList, setModList] = useState([]);

    let listAtividades = props.atividades.map(
        (atividade) => (atividade.modulo)
    );
    const unique = [...new Set(listAtividades)];

    if(modList.length < unique.length){
        setModList(unique);
        console.log(modList);
    }else{
        
    }

    const listModulos = modList.map(
        (modulo) => (
            <SingleModulo
                titulo={modulo}
                setAtividades={props.setAtividades}
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

    const auth = useContext(AuthContext);

    const selecionarModulo = () => {
        console.log(props);
        getAtividadePorModulo({auth: auth.token, modulo: props.titulo}).then(
            (response) => {
                props.setAtividades(response.data);
            }).catch(
                (error) => {
                    console.log(error);
                }
            );
    }

    return(
        <div onClick={selecionarModulo} className="menu-left-button back-verde">               
            {props.titulo}
        </div>        
    );
}