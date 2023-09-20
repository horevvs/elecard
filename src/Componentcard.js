import catalog from "./catalog.json";
import './App.css';
import React, { useEffect, useState } from 'react';





function Componentcard() {

  const [state, setState] = useState(catalog)



  const send = (id) => {

    let result = state.filter(
      element => element.id !== id);
      setState(result)
    console.log(result);


  }










  return (
    <div className="d-flex flex-wrap justify-content-center  ">
      {state.map((item) => {
        return (
          <div className="m-2 d-flex " >
            <div className="">
              <img src={item.image} alt='нет' width='300' height='250' />
              <div class="close" onClick={() => send(item.id)}>&times;</div>
            </div>
          </div>
        )
      })}
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Сортировать по дате
        </label>
      </div>
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Сортировать по имени
        </label>
      </div>
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Сортировать по размеру файла
        </label>
      </div>
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Вернуть исходное состояние
        </label>
      </div>


    </div>
  );
}

export default Componentcard;
