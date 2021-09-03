import { NavLink } from 'react-router-dom'
import '../../common/colors/colors.css'
import './Login.css'

export function Login() {


    return (
        
        <div className="background back-verde">
            <div className="card back-preto">
                <form className="form">
                    
                    <label className="label-txt branco" for="usuario">Usuário:</label>
                    <input  className="input back-branco" type="text" name="campo-usuario" ></input>
                    <label className="label-txt branco" for="password">Senha:</label>
                    <input className="input back-branco" type="password" name="password"></input>
                    <div className="sub-opcoes"> 
                        <input className="check " type="checkbox" ></input>
                        <p className="lembrar branco" >Lembrar de mim </p>
                        <a className="esqueceu-senha branco">Esqueceu a senha?</a>
                    </div>
                    <NavLink
                            exact
                            className="botao-confirmar preto"
                            to="/">
                            Entrar
                    </NavLink>
                    
                    <div className="txt-redirecionar branco"> 
                       <span>Vem ser Fupimpa!
                            <NavLink
                            exact
                            className="link-redirecionar branco"
                            to="/cadastro">
                                Cadastre-se
                            </NavLink>
                          
                        </span>
                    </div>
                </form>

            </div>
        </div>
    )
}
