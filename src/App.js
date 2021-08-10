import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import { CodeEditor } from './components/common/Editor/Editor';
import { Home } from './components/pages/Home/Home';
import { PaginaAtividadeX } from './components/pages/PaginaAtividade/PaginaAtividade';
import { Login } from './components/pages/PaginaLogin/Login';
import history from './history';

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

        
    </Router>
    
  );
}

export default App;

