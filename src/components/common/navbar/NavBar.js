import { Link, NavLink } from 'react-router-dom';
import '../../common/colors/colors.css';
import logo from '../../common/logo.svg';
import './navbar.css';


export function NavBar() {

    return (
        <div className="navbar background-laranja">
            <img src={logo} alt="Logo Fupimpa" height="36px"></img>
            <div className="navbar-container-right">
                <nav>
                    <div className="navbar-button">
                        <NavLink
                            exact
                            className="button branco"
                            to="/">
                            módulos
                        </NavLink>
                    </div>
                    <div className=" navbar-button">
                        <NavLink
                            className="button branco"
                            to="/turma">
                            turma
                        </NavLink>
                    </div>
                    <div className="navbar-button">
                        <NavLink
                            exact
                            className="button branco"
                            to="/perfil">
                            perfil
                        </NavLink>
                    </div>

                </nav>
            </div>
        </div>
    );
}

