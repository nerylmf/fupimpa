import { NavLink } from 'react-router-dom'
import '../../common/colors/colors.css'
import './Login.css'

export function Login() {
    return (
        
        <div className="background-login back-verde">
            <div className="card-login back-preto">
                <form className="form">
                    
                    <label className="txt-login branco" for="usuario">Usuário:</label>
                    <input  className="input-usuario back-branco" type="text" name="campo-usuario" ></input>
                    <label className="txt-login branco" for="passoword">Senha:</label>
                    <input className="input-senha back-branco" type="password" name="password"></input>
                    <div className="sub-opcoes"> 
                        <input className="check " type="checkbox" ></input>
                        <p className="lembrar branco" >Lembrar de mim </p>
                        <a className="esqueceu-senha branco">Esqueceu a senha?</a>
                    </div>
                    <NavLink
                            exact
                            className="botao-entrar back-laranja preto"
                            to="/">
                            Entrar
                    </NavLink>
                    
                    <div className="cadastro branco"> 
                       <span>Vem ser Fupimpa!<a className="link-cadastro"> Cadastre-se</a></span>
                    </div>
                </form>

            </div>
        </div>
    )
}
