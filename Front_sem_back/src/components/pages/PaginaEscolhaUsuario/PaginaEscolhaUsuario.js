import { NavLink } from 'react-router-dom'
import '../../common/colors/colors.css'
import './PaginaEscolhaUsuario.css'
import logo from './logo.svg';

export function EscolherUser() {
    return (
        
        <div className="background-escolherUser back-branco">
            <img src={logo} alt="Logo Fupimpa" height="66px"></img>
            <div className="container-txt background-preto">
                <span className="txt preto">
                    Bem vindo ao Fupimpa! Aqui você vai aprender a programamar de um jeito muito mais
                    divertido! Faça agora o seu cadastro basta escolher uma opção abaixo: </span>
            </div>
            <div className="botoes">
                    <NavLink
                            exact
                            className="botao back-verde preto"
                            to="/cadastroAluno">
                            Sou Aluno
                    </NavLink>
                    <NavLink
                            exact
                            className="botao back-verde preto"
                            to="/cadastroAluno">
                            Sou Professor
                    </NavLink>
                

            </div>
        </div>
    )
}
