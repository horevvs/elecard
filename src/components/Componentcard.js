import catalog from "../catalog.json";
import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Componentcard() {
  //  создаем хук чтобы организовать навигацию
  const navigate = useNavigate();


  //  определяем наше состояине которое бере массив json bp
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("name");
    if (saved == null) {
      return catalog
    }
    else {
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    }
  });




  // удаляет картинку при клике на крестик
  const send = (id) => {
    document.getElementById(id).classList.add('shake')

    setTimeout(() => {
      let result = state.filter(
        element => element.id !== id);
      localStorage.setItem("name", JSON.stringify(result));
      setState(result);
      document.getElementById(id).classList.remove('shake')
    }, 800
    );


  }

  // возвращает исходное состояние как по заданию
  const returncatalogs = () => {
    setState(catalog);
    localStorage.setItem("name", JSON.stringify(catalog));
  }

  // сортирует по размеру файла и json
  const sort = () => {
    let result = [...state].sort((x, y) => x.filesize - y.filesize);
    setState(result);
    localStorage.setItem("name", JSON.stringify(result));
  }

  // сортирует по  категории из json
  const sortcategory = () => {
    let results = [...state].sort(function (a, b) {
      let x = a.category < b.category ? -1 : 0;
      return x
    });
    setState(results);
    localStorage.setItem("name", JSON.stringify(results));
  }

  // сортирует по имени файла
  const sortname = () => {
    let results = [...state].sort(function (a, b) {
      let x = a.name < b.name ? -1 : 0;
      return x;
    });
    setState(results);
    localStorage.setItem("name", JSON.stringify(results));
  }

  // сортирует по дате
  const sortDate = () => {
    let results = [...state].sort(function (a, b) {
      return new Date(a.timestamp) - new Date(b.timestamp)
    });
    setState(results)
    localStorage.setItem("name", JSON.stringify(results));
  }

  // переход по радиобаттону
  const handleClick = () => {
    navigate('/about');
  }





  return (


    <div className="d-flex flex-wrap justify-content-center body  ">
      {/* {loading ? (
        <div className='loader-fon d-flex  justify-content-center align-items-center'><span class="loader"></span></div>
      ) : (
        <div >

        </div>
      )} */}


      {state.map((item) => {
        return (
          <div className="m-2 d-flex  size" >
            <div className='effect' >
              <img id={item.id} src={item.image} alt='нет' width='300' height='250' />
              <figcaption className="figcaptionPosition"> имя - {item.name} <br /> категория - {item.category}
                <br />  размер - {item.filesize}
                <br />  дата - {item.timestamp}
              </figcaption>
              <div className="close" onClick={() => send(item.id)}>&times;</div>
            </div>
          </div>
        )
      })}
      <div className="d-flex flex-wrap justify-content-between   mx-5 ">
        <div class="form-check px-3  ">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={sortDate} />
          <label class="form-check-label labelstyle " for="flexRadioDefault1">
            Сортировать по дате
          </label>
        </div>
        <div class="form-check px-3 ">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={sortname} />
          <label class="form-check-label text-dark labelstyle" for="flexRadioDefault2">
            Сортировать по имени
          </label>
        </div>
        <div class="form-check px-3 ">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={sortcategory} />
          <label class="form-check-label text-dark labelstyle" for="flexRadioDefault3">
            Сортировать по категории
          </label>
        </div>
        <div class="form-check px-3">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={sort} />
          <label class="form-check-label text-dark labelstyle" for="flexRadioDefault4">
            Сортировать по размеру файла
          </label>
        </div>
        <button onClick={returncatalogs} type="button" class="btn btn-dark mx-4 btnsize">Вернуть список</button>
        <div class="form-check px-3">
          <input type="checkbox" class="btn-check  " onClick={handleClick} id="btn-check-outlined" autocomplete="off" />
          <label class="btn btn-outline-primary bg-dark" for="btn-check-outlined">Перейти на страницу</label>

        </div>
      </div>
    </div>
  );
}

export default Componentcard;
