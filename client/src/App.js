// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './views/Navbar/Navbar';
import LeftNav from './views/LeftNav/LeftNav';
import Board from './views/Kanban/Board';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LeftNav />
      <Switch>
        <Route exact path="/project/board">
          <Board />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
