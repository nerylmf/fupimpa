import { Route, Router } from 'react-router-dom';
import './App.css';
//import { CodeEditor } from './components/common/Editor/Editor';
import { Home } from './components/pages/Home/Home';
import { PaginaAtividadeX } from './components/pages/PaginaAtividade/PaginaAtividade';
import { Cadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { EscolherUser } from './components/pages/PaginaEscolhaUsuario/PaginaEscolhaUsuario';
import { Turma } from './components/pages/PaginaTurma/Turma';
import { Login } from './components/pages/PaginaLogin/Login';
import history from './history';
import { PaginaTurmaForum } from './components/pages/PaginaTurmaForum/PaginaTurmaForum';
//import { Modulo2 } from './components/common/atividades/modulos/Modulo2';
//import { Modulo3 } from './components/common/atividades/modulos/Modulo3';
//import { Modulo4 } from './components/common/atividades/modulos/Modulo4';
import { MenuLeft } from './components/common/menuleft/MenuLeft';
import { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Galinha } from './components/common/Galinha/Galinha';
//import { Modulo1 } from './components/common/atividades/modulos/Modulo1';
import { PaginaFacaPergunta } from './components/pages/PaginaFacaPergunta/PaginaFacaPergunta';
import { Atv1Modulo4 } from './components/common/AtividadesEspecifica/AtividadesEspecifica';
import { Modulo1 } from './components/common/atividades/modulos/Modulo1';
import { PaginaModulos } from './components/pages/PaginaModulos/PaginaModulos';
//import { Atividade1Modulo4 } from './components/pages/PaginaAtividade/Modulo4/atv1';

export const AuthContext = createContext(null);
//import { Burguer } from './components/common/menuleft/Burguer';


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
          {
            auth.token === null || auth.token === "null"?
            <Login></Login> : 
            <Redirect to="/"></Redirect>
          } 
          
        </Route>


        <Route exact path="/">
          {
            auth.token === null || auth.token === "null"?
            <Redirect to="/login"></Redirect> : 
            <Redirect to="/modulos"></Redirect>
          }   
          <Redirect to="/modulos"></Redirect>       
        </Route>

        <Route path="/Atividade"> {
            /* auth.token === null || auth.token === "null"?
            <Redirect to="/login"></Redirect> : */ 
              <PaginaAtividadeX></PaginaAtividadeX>
          }
        </Route>

        <Route path="/cadastro"
          component={EscolherUser}>
        </Route>

        <Route path="/cadastroAluno"
          component={Cadastro}>
        </Route>

        <Route path="/turma">
          {
            auth.token === null || auth.token === "null"?
            <Redirect to="/login"></Redirect> :
            <Turma></Turma>
          }
        </Route>

        <Route path="/turmaForum"
          component={PaginaTurmaForum}>
            {
              auth.token === null || auth.token === "null"?
              <Redirect to="/login"></Redirect> :
              <PaginaTurmaForum></PaginaTurmaForum>
            }
        </Route>

       <Route exact path="/modulos">
           {
             auth.token === null || auth.token == "null"?
             <Redirect to="/login"></Redirect> :
             <PaginaModulos></PaginaModulos>
           }       
      </Route>

    {/*
      <Route path="/modulo/2"
        component={Modulo2}>
      </Route>

      <Route path="/modulo/3"
        component={Modulo3}>
      </Route>

      <Route path="/modulo/4"
        component={Modulo4}>
      </Route> */}



      <Route path="/perguntar"
        component={PaginaFacaPergunta}>
      </Route>

    </Router>

    </AuthContext.Provider>
  );
}

export default App;

