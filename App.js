import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginItem from './LoginItem/LoginItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterationItem from './RegisterationItem/RegisterationItem';


function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
      <Routes>
        <Route path='/Registeration' element={<RegisterationItem/>}></Route>
        <Route path='/' element={<LoginItem/>}></Route>
        <div class="opacity-75" className="App-decor">Regular shadow</div>
      </Routes>
      </header>
    </Router>
    </div>
  );
}

export default App;
