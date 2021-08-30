import axios from "axios";

export function cadastrar(data){
    return(
        axios({
            method:"POST",
            url:"http://localhost:8393/api/aluno",
            data: data,    
        })
    );
}

export function signin(data){
    return(
        axios({
            method:"POST",
            url:"http://localhost:8393/api/usuarios/signin",
            data: data,
        })
    );
}