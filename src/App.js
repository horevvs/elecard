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
        {/* <div class="form-check d-flex justify-content-center">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Перейти к дереву
          </label>
        </div> */}
      </div>




      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
