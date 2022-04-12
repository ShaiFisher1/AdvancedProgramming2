import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginItem from './LoginItem/LoginItem';
import RegisterationItem from './RegisterationItem/RegisterationItem.js';


function App() {
  return (
    <div className="React FromApp">
    <div class="opacity-75" className="App-decor">Regular shadow</div>
      <header className="App-header">
      <Router>
        <Routes>
            <Route path='/RegisterationItem' element={<RegisterationItem/>}></Route>
            <Route path='/' element={<LoginItem/>}></Route>
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
