// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './views/Navbar/Navbar';
import LeftNav from './views/LeftNav/LeftNav';
import Board from './components/Board';
import NotFound from './views/404/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LeftNav />
      <Switch>
        <Route exact path="/project/board">
          <Board />
        </Route>
        {/* <Route exact path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
