import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import RegisterItem from './RegisterItem/RegisterItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="opacity-75" className="App-decor">Regular shadow</div>
        <RegisterItem />
      </header>
    </div>
  );
}

export default App;
