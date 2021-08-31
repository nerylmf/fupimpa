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