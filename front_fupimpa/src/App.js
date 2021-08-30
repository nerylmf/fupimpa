import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import { CodeEditor } from './components/common/Editor/Editor';
import { Home } from './components/pages/Home/Home';
import { PaginaAtividadeX } from './components/pages/PaginaAtividade/PaginaAtividade';
import { Cadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { EscolherUser } from './components/pages/PaginaEscolhaUsuario/PaginaEscolhaUsuario';
import { Forum, Turma } from './components/pages/PaginaTurma/Turma';
import { Login } from './components/pages/PaginaLogin/Login';
import history from './history';
import { PaginaTurmaForum } from './components/pages/PaginaTurmaForum/PaginaTurmaForum';
import { Modulo2 } from './components/common/atividades/modulos/Modulo2';
import { Modulo3 } from './components/common/atividades/modulos/Modulo3';
import { Modulo4 } from './components/common/atividades/modulos/Modulo4';
import { MenuLeft } from './components/common/menuleft/MenuLeft';
import { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState(
    {
      token: localStorage.getItem("token"),
      nome: localStorage.getItem("nome"),
    }
  );

  const setAuthLS = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  } 

  return (

    <AuthContext.Provider value={{
      auth: auth,
      setAuth: setAuthLS,
    }}>

      <Router history={history}>
        <Route path="/login">
          <Login></Login>
        </Route>


        <Route exact path="/">
          {
            auth.token == null || auth.token == "null"?
            <Redirect to="/login"></Redirect> :
            <Home></Home>
          }          
        </Route>

        <Route path="/Atividade"
          component={PaginaAtividadeX}>
        </Route>

        <Route path="/cadastro"
          component={EscolherUser}>
        </Route>

        <Route path="/cadastroAluno"
          component={Cadastro}>
        </Route>

        <Route path="/turma"
          component={Turma}>
        </Route>

        <Route path="/turmaForum"
          component={PaginaTurmaForum}>
        </Route>

        <Route exact path="/modulo"> 
          <Home></Home>
        </Route>


        <Route path="/modulo/2"
          component={Modulo2}>
        </Route>

        <Route path="/modulo/3"
          component={Modulo3}>
        </Route>

        <Route path="/modulo/4"
          component={Modulo4}>
        </Route>

      </Router>

    </AuthContext.Provider>
  );
}

export default App;

