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
import { Burguer } from './components/common/menuleft/Burguer';
import { Galinha } from './components/common/Galinha/Galinha';
import { Modulo1 } from './components/common/atividades/modulos/Modulo1';
import { PaginaFacaPergunta } from './components/pages/PaginaFacaPergunta/PaginaFacaPergunta';
import { Atv1Modulo4 } from './components/common/AtividadesEspecifica/AtividadesEspecifica';
import { Atividade1Modulo4 } from './components/pages/PaginaAtividade/Modulo4/atv1';

function App() {
  return (

    <Router history={history}>
      <Route path="/login">
        <Login></Login>
      </Route>


      <Route exact path="/">
        <Home></Home>
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

      <Route exact path="/modulo"
         component={Modulo1}> 
        {/* <Home></Home> */}
        
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



      <Route path="/perguntar"
        component={PaginaFacaPergunta}>
      </Route>

    </Router>

  );
}

export default App;

