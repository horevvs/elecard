import catalog from "./catalog.json";
import './App.css';
import React, { useState } from 'react';




function Componentcard() {

  // const [state, setState] = useState(catalog);

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




  const send = (id) => {
    let result = state.filter(
      element => element.id !== id);
    setState(result)
    localStorage.setItem("name", JSON.stringify(state));
    console.log(result);
  }

  const returncatalogs = () => {
    setState(catalog)
    localStorage.setItem("name", JSON.stringify(catalog));
  }


  const sort = () => {
    let result = state.sort((x, y) => x.filesize - y.filesize);
    setState(result)
    localStorage.setItem("name", JSON.stringify(result));

    console.log(result);
  }

  const sortcategory = () => {
    let results = state.sort(function (a, b) {
      let x = a.category < b.category ? -1 : 1;
      return x; })
    console.log(results);
  }

  const sortname = () => {
    let results = state.sort(function (a, b) {
      let x = a.name < b.name ? -1 : 1;
      return x; })
    console.log(results);
  }








  // реализовать фильтрацию все лучше

  return (
    <div className="d-flex flex-wrap justify-content-center  ">
      {state.map((item) => {
        return (
          <div className="m-2 d-flex " >
            <div className="">
              <img src={item.image} alt='нет' width='300' height='250' />
              <figcaption>{item.name}</figcaption>
              <div className="close" onClick={() => send(item.id)}>&times;</div>
            </div>
          </div>
        )
      })}

      <div className="d-flex flex-wrap justify-content-between">
        <div className="form-check px-5">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Сортировать по дате
          </label>
        </div>
        <div className="form-check px-5">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={sortname} />
          <label className="form-check-label" for="flexCheckDefault">
            Сортировать по имени
          </label>
        </div>
        <div className="form-check px-5">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={sortcategory} />
          <label className="form-check-label" for="flexCheckDefault">
            Сортировать по категории
          </label>
        </div>
        <div class="form-check px-5" >
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={sort} />
          <label class="form-check-label" for="flexCheckDefault">
            Сортировать по размеру файла
          </label>
        </div>
        <button onClick={returncatalogs} type="button" class="btn btn-danger mx-4 btnsize">Вернуть список</button>
      </div>
    </div>
  );
}

export default Componentcard;
