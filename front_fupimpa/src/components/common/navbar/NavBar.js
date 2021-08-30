import { Link, NavLink } from 'react-router-dom';
import '../../common/colors/colors.css';
import logo from '../../common/logo.svg';
import './navbar.css';


export function NavBar() {

    return (
        <div className="navbar background-laranja">
            <img className="logo-img" src={logo} alt="Logo Fupimpa" height="36px"></img>
            <div className="navbar-container-right">
                <nav>
                    <div className="navbar-button">
                        <NavLink
                            // exact
                            className="button branco"
                            to="/modulo"
                        // to="/"
                        >
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

                    <div className='container-opc-perfil'>

                        <div className="navbar-button">
                            <NavLink
                                exact
                                className="button button-perfil branco"
                                // to="/perfil"
                                to="">
                                perfil
                                {/* <div class="container-dropdown back-preto">
                                <a className="link-filtro branco" href="">Ana</a>
                                <a className="link-filtro branco" href="">Sair</a>
                            </div> */}

                            </NavLink>
                        </div>

                        <div class="container-dropdown-perfil back-verde">
                            <a className="link-perfil branco" href="">Nome</a>
                            <a className="link-perfil branco" href="">Sair</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}


{/* <div className="navbar-button">
    <NavLink
        exact
        className="button branco"
        // to="/perfil"
        to=""
    >
        perfil
        {/* <div class="container-dropdown back-preto">
            <a className="link-filtro branco" href="">Ana</a>
            <a className="link-filtro branco" href="">Sair</a>
        </div> *

    </NavLink>
</div> */}
