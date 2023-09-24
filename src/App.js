import './Componentcard.js'
import './App.css';
import Componentcard from './Componentcard.js';
import Tree from './Tree.js';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';





function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="App">
      {loading ? (
        <div className='loader-fon d-flex  justify-content-center align-items-center'><span class="loader"></span></div>
      ) : (
        <div >
          <header className="header">
            Header
          </header>

          
          <Routes>
            <Route  path="/" element={<Componentcard />} />
            <Route  path="/about" element={<Tree />} />
          </Routes>
          <footer className='footer'>Footer</footer>
        </div>
      )}
    </div>
  );
















}

export default App;
