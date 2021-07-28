import '../../common/colors/colors.css';
import logo from '../../common/logo.svg';
import './navbar.css';


export function NavBar(){
    return(
        <div className="navbar background-laranja">
            <img src={logo} alt="Logo Fupimpa" height="36px"></img>
            <div className="navbar-container-right">
                <nav>
                    <NavButton label="módulos" page="https://www.google.com.br/"></NavButton>
                    <NavButton label="turma" page="https://www.google.com.br/"></NavButton>
                    <NavButton label="perfil" page="https://www.google.com.br/"></NavButton>
                </nav>
            </div>
        </div>
    );
}


export function NavButton(props){
    return(
        <div className="navbar-button">
            <a className="branco"href={props.page}>{props.label}</a>
        </div>
    );
}