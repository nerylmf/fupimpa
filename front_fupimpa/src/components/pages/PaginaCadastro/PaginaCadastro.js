import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { cadastrar } from '../../../api/auth'
import history from '../../../history'
import '../../common/colors/colors.css'
//import '../PaginaLogin/Login.css'
import '../PaginaLogin/Login.css'
import './PaginaCadastro.css'



export function Cadastro() {

    const {register, handleSubmit} = useForm();
    const submeter = (usuario) => {
        //console.log(usuario);
        cadastrar(usuario).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }); 

        history.push("/login");
    };

    return (
        
        <div className="background-cadastro back-verde">
           <span className="txt-bemVindo preto">Bem vindo ao Fupimpa! </span>
           
            <div className="card back-preto">
                <form className="form" onSubmit={handleSubmit(submeter)}>
                   
                    <label className="label-txt branco" for="usuario">Usuário:</label>
                    <input  className="input-cad back-branco" type="text" name="campo-usuario" 
                        {...register("nome")}
                    ></input>
                    
                    <label className="label-txt branco" for="email">Email:</label>
                    <input  className="input-cad back-branco" type="text" name="campo-email" 
                        {...register("email")}
                    ></input>
                    
                    <label className="label-txt branco" for="passoword">Senha:</label>
                    <input className="input-cad back-branco" type="password" name="password"
                        {...register("senha")}
                    ></input>

                    <button type="submit" className="botao-confirmar botao-cad back-laranja preto">
                        Cadastrar
                    </button>

                    {/* <NavLink
                            exact
                            className="botao-confirmar botao-cad back-laranja preto"
                            to="/">
                            Cadastrar
                    </NavLink> */}
                    
                    <div className="txt-redirecionar branco">
                        <span>Já é um Fupimpa? 
                            <NavLink
                                exact
                                className="txt-redirecionar link-redirecionar branco"
                                to="/login">
                                 Faça seu login!
                            </NavLink>
                        </span>
                    </div>
                   
                </form>

            </div>
        </div>
    )
}
