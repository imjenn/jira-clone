// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './views/Navbar/Navbar';
import LeftNav from './views/LeftNav/LeftNav';
import Board from './components/Board';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LeftNav />
      <Switch>
        <Route path="/project/board">
          <Board />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
