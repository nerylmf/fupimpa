import axios from "axios";

export function cadastrar(data){
    //console.log(data);
    return(        
        axios({
            method:"POST",
            url:"http://localhost:8393/api/aluno",
            data: data,    
        })
    );
}

export function signin(data){
    console.log(data);
    return(
        axios({
            method:"POST",
            url:"http://localhost:8393/api/aluno/signin",
            data: data,
        })
    );
}

export function getAtividades(token){
    return(
        axios({
            method:"GET", 
            url:"http://localhost:8393/api/atividade",
            headers: {
                "token": token,
            },
        })
    );
}

export function getAtividadeById({token: token, id: id}){
    return(
        axios({
            method:"GET", 
            url:"http://localhost:8393/api/atividade/" + id,
            headers: {
                "token": token,
            },
        })
    );
}

export function getAtividadePorModulo({token: token, modulo: modulo}){
    return(
        axios({
            method:"GET", 
            url:"http://localhost:8393/api/atividade/modulo/" + modulo,
            headers: {
                "token": token,
            },
        })
    );
}