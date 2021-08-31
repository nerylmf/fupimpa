import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { signin } from '../../../api/auth';
import { AuthContext } from '../../../App';
import history from '../../../history';
import '../../common/colors/colors.css'
import './Login.css'




export function Login() {

    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);

    const submeter = (usuario) => {
        signin(usuario).then((response) => {
            console.log(response);
            auth.setAuth({
                token: response.data.token, nome: response.data.nome
            });
            history.push("/modulo");
        }).catch((error) => {
            console.log(error);
        }); 

        
    }

    return (
        
        <div className="background back-verde">
            <div className="card back-preto">
                <form className="form" onSubmit={handleSubmit(submeter)}>
                    
                    <label className="label-txt branco" for="usuario">Usuário:</label>
                    <input  className="input back-branco" type="text" name="campo-usuario" 
                        {...register("nome")}
                    ></input>

                    <label className="label-txt branco" for="password">Senha:</label>
                    <input className="input back-branco" type="password" name="password"
                        {...register("senha")}
                    ></input>

                    <div className="sub-opcoes"> 
                        <input className="check " type="checkbox" ></input>
                        <p className="lembrar branco" >Lembrar de mim </p>
                        <a className="esqueceu-senha branco">Esqueceu a senha?</a>
                    </div>
                    {/* <NavLink
                            exact
                            className="botao-confirmar preto"
                            to="/">
                            Entrar
                    </NavLink> */}

                    <button type="submit"className="botao-confirmar preto">
                        Entrar
                    </button>
                    
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
