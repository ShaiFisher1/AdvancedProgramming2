import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginItem from './LoginItem/LoginItem';
import RegisterationItem from './RegisterationItem/RegisterationItem';
import ChatsItem from './ChatsItem/ChatsItem';
import Register from './RegisterationItem/RegisterationItem';


function App() {
  return (
    <div className="React FromApp">
    <div className="opacity-75" class="App-decor"></div>
      <header className="App-header">
      <Router>
        <Routes>
            <Route path='/RegisterationItem' element={<Register/>}></Route>
            <Route path='/' element={<LoginItem/>}></Route>
            <Route path="/ChatsItem/:userName" element={<ChatsItem/>}></Route>
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;