import { NavLink } from 'react-router-dom'
import '../../common/colors/colors.css'
//import '../PaginaLogin/Login.css'
import './PaginaCadastro.css'


export function Cadastro() {
    return (
        
        <div className="background-login back-verde">
           <span className="txt-bemVindo preto">Bem vindo ao Fupimpa! </span>
           
            <div className="card-login back-preto">
                <form className="form">
                   
                    <label className="txt-login branco" for="usuario">Usuário:</label>
                    <input  className="input back-branco" type="text" name="campo-usuario" ></input>
                    <label className="txt-login branco" for="matricula">Matricula:</label>
                    <input  className="input back-branco" type="text" name="campo-matricula" ></input>
                    <label className="txt-login branco" for="passoword">Senha:</label>
                    <input className="input back-branco" type="password" name="password"></input>
                   
                    <NavLink
                            exact
                            className="botao-cadastrar back-laranja preto"
                            to="/">
                            Cadastrar
                    </NavLink>
                    
                    <div className="login branco">
                        <span>Já é um Fupimpa! 
                            <NavLink
                                exact
                                className="login link-login branco"
                                to="/">
                                 Faça seu login!
                            </NavLink>
                        </span>
                    </div>
                   
                </form>

            </div>
        </div>
    )
}
