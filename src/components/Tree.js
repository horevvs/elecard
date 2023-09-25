
import '../App.css';
import { useNavigate } from 'react-router-dom';
import catalog from "../catalog.json";
import { useState } from 'react';
import Image from 'react-bootstrap/Image';


export default function Tree() {




  //  создаем хук чтобы организовать навигацию
  const navigate = useNavigate();
  const [hiddencars, setHiddencars] = useState(true);
  const [hiddenbikes, setHiddenbikes] = useState(true);
  const [hiddenbinature, setHiddennature] = useState(true);

  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("name");
    if (saved == null) {
      return catalog
    }
    else {
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    }
  })


  // функция перехода на другую страницу
  const handleClick = () => {
    navigate('/');
  }

  // функции открывания выпадающего меню
  function HideCars() {
    setHiddencars(!hiddencars);
  }

  function HideBikes() {
    setHiddenbikes(!hiddenbikes);
  }

  function HideNature() {
    setHiddennature(!hiddenbinature);
  }

  function HideImage(id,) {
    document.getElementById(id).classList.add('invisible')
    document.querySelector('body').classList.remove('body');
    document.getElementById(id).classList.remove('modals')
  }

  function ShowImage(id) {
    document.getElementById(id).classList.remove('invisible')
    document.getElementById(id).classList.add('modals')
    document.querySelector('body').classList.add('body');
  }

  return (
    <div className='body'>
      <ul className='tree'>

        <ol className='olstyle' onClick={HideCars}  >Cars</ol>
        <div className={hiddencars ? "  " : " show "} >
          {state.filter(element => element.category === 'car').map((item) => (<ul className='mx-5 mt-2' key={item.id}>
            <Image onClick={() => { ShowImage(item.id, item.image) }} src={item.image} thumbnail width='70' height='50' />
            <div className='invisible position-absolute top-0 start-0 bg-opacity-10 d-flex  justify-content-center' id={item.id} >
              <div className='align-self-center'>
                <Image  src={item.image} thumbnail width='320' height='240' />
                <button onClick={() => { HideImage(item.id) }}> &times;</button>
              </div>
            </div>
          </ul>))}
        </div>

        <ol className='olstyle' onClick={HideBikes} >Bikes</ol>
        <div className={hiddenbikes ? "  " : " show "} >
          {state.filter(element => element.category === 'bikes').map((item) => (<ul className='mx-5 mt-2' key={item.id}>
            <Image onClick={() => { ShowImage(item.id, item.image) }} src={item.image} thumbnail width='70' height='50' />
            <div className='invisible position-absolute top-0 start-0 bg-opacity-10 d-flex  justify-content-center' id={item.id} >
              <div className='  align-self-center'>
                <Image  src={item.image} thumbnail width='320' height='240' />
                <button onClick={() => { HideImage(item.id) }}> &times;</button>
              </div>
            </div>
          </ul>))}
        </div>

        <ol className='olstyle' onClick={HideNature} >Nature</ol>
        <div className={hiddenbinature ? "  " : " show "} >
          {state.filter(element => element.category === 'nature').map((item) => (<ul className='mx-5 mt-2' key={item.id}>
            <Image onClick={() => { ShowImage(item.id, item.image) }} src={item.image} thumbnail width='70' height='50' />
            <div className='invisible position-absolute top-0 start-0 bg-opacity-10 d-flex  justify-content-center' id={item.id} >
              <div className='  align-self-center '>
                <Image className='mx-2' src={item.image} thumbnail width='320' height='240' />
                <button onClick={() => { HideImage(item.id) }}> &times;</button>
              </div>
            </div>
          </ul>))}
        </div>
      </ul>

      <div class="form-check px-3">
        <input type="checkbox" class="btn-check  bg-dark" onClick={handleClick} id="btn-check-outlined" autocomplete="off" />
        <label class="btn btn-outline-primary bg-dark" for="btn-check-outlined"> Вернуться назад</label>
      </div>
    </div>
  );
}


