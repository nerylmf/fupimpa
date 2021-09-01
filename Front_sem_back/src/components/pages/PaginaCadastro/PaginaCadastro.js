
import { NavLink } from 'react-router-dom'

import history from '../../../history'
import '../../common/colors/colors.css'
//import '../PaginaLogin/Login.css'
import '../PaginaLogin/Login.css'
import './PaginaCadastro.css'



export function Cadastro() {
    function foiClicado(){
        history.push("/login");}
    

    return (
        
        <div className="background-cadastro back-verde">
           <span className="txt-bemVindo preto">Bem vindo ao Fupimpa! </span>
           
            <div className="card back-preto">
                <form className="form" onSubmit={foiClicado}>
                   
                    <label className="label-txt branco" for="usuario">Usuário:</label>
                    <input  className="input-cad back-branco" type="text" name="campo-usuario" 
                    ></input>
                    
                    <label className="label-txt branco" for="matricula">Matricula:</label>
                    <input  className="input-cad back-branco" type="text" name="campo-matricula" 
                    ></input>
                    
                    <label className="label-txt branco" for="passoword">Senha:</label>
                    <input className="input-cad back-branco" type="password" name="password"
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
