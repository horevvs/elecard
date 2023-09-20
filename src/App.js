import './Componentcard.js'
import './App.css';
import Componentcard from './Componentcard.js';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App">
      <header className="header">
        Header
      </header>
      <div className='body'>
        <Componentcard />
      </div>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
