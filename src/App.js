import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Reviews } from "./components/pages/Reviews";
import { Ranking } from "./components/pages/Ranking";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container-fluid bg-blue vh-100">
        <NavBar></NavBar>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/reviews' element={< Reviews />}></Route>
            <Route exact path='/ranking' element={< Ranking />}></Route>
        </Routes>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
