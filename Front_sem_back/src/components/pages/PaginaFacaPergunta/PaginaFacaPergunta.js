import history from "../../../history";
import { NavBar } from "../../common/navbar/NavBar";
import './PaginaFacaPergunta.css'
import '../../common/colors/colors.css'


function FormPostar() {

    function foiclicado() {
        console.log("Foi clicado!");
        history.push("/turmaForum")
    }
    return (
        <div className="conteiner-form back-branco">
            <div className="ajustar-pg-pergunta">
            <form className="formulario">
                <div className="conteiner-texto">
                    <label className="label-formPostar">Titulo da pergunta:</label>
                    <input className="texto-form" type="text" name="campoMensagem" placeholder="Sobre o que é sua pergunta?" autofocus ></input>
                    <label className="label-formPostar">Descrição da Pergunta:</label>
                    <input className="texto-form-desc" type="text" name="campoMensagem" placeholder="Descreva sua pergunta aqui..." autofocus ></input>
                </div>
                <div className="botao-pergunta">
                <button className="botao-submeter  preto" onClick={foiclicado} type="submit">Postar</button>
                </div>
            </form>
            </div>
        </div>
    )
}
export function PaginaFacaPergunta() {
    return (
        <div className="back-preto">
            <NavBar></NavBar>
            <FormPostar></FormPostar>
        </div>
    )
}






// // import { useContext, useEffect, useState } from "react";
// // import { AuthContext } from "../../../App";
// //import { useForm } from "react-hook-form";
// import history from "../../../history";
// import './PaginaFacaPergunta.css'
// import { inserirPosts, listarPosts } from "../../../api/postsAPI";
// import { Redirect} from "react-router-dom";
// import { NavBar } from "../../common/navbar/NavBar";


// function FormPostar({ onSubmeter }) { 
//     const [postar,setPostar] = useState([]);

//     const {auth}= useContext(AuthContext);
//     const { register, handleSubmit } = useForm();

//     const submeter = (texto) => {
 
//         {onSubmeter(texto)};
//         history.push("/");
//     };

//     useEffect(()=>{ 
//         listarPosts(auth.token).then(
//             (response)=>{
//                 setPostar(response.data)
//                 console.log(response)
//             }
//         ).catch((error)=>{
//             console.log(error);
//         })

//     },[])


// return (
//     <div className="conteiner-form back-branco">
//         <div className="ajustar-pg-pergunta">
//         <form   onSubmit={handleSubmit(submeter)} className="formulario">
//             <div className="conteiner-texto">
//                 <label className="label-formPostar">Titulo da pergunta:</label>
//                 <input className="texto-form" type="text" placeholder="Sobre o que é sua pergunta?" autofocus autofocus {...register("pergunta") ></input>
//                 <label className="label-formPostar">Descrição da Pergunta:</label>
//                 <input className="texto-form-desc" type="text"  placeholder="Descreva sua pergunta aqui..." autofocus {...register("ddescricao") ></input>
//             </div>
//             <div className="botao-pergunta">
//             <button className="botao-submeter  preto" onClick={foiclicado} type="submit">Postar</button>
//             </div>
//         </form>
//         </div>
//     </div>
// )
// export function PaginaFacaPergunta() {

//      const [posts, setPosts] = useState([ ])
//      const {auth}= useContext(AuthContext);
//      const atualizarPosts =()=> { 
//         listarPosts(auth.token).then(
//             (response)=>{
//                setPosts(response.data);
//             }
//         ).catch((error)=>{
//             console.log(error);
//         })
//     }

//     useEffect(()=>{
//         atualizarPosts();       
//     },[]);
//     const adicionarPost = (post) =>{
//         inserirPosts(auth.token, post).then( 
//             (response)=>{
//                 console.log("post inserido",response);
//                // <PaginaFeed></PaginaFeed> para funcionar comenta o const posts e atualizarPosts
//                 atualizarPosts();
//             }
//         ).catch(
//             (error)=>{
//                 console.log("erradoooo",error);

//             }
//         )
//     };

// return (
//     <div>
//         <NavBar></NavBar>
//         <FormPostar onSubmeter={adicionarPost}></FormPostar>
//     </div>
// )
// }


