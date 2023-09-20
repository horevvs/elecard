import catalog from "./catalog.json";
import './App.css';


function Componentcard() {
  return (
    <div className="d-flex flex-wrap justify-content-center  ">
      {catalog.map((item) => {
        return (
          <div className="m-2 " >
            <img src={item.image} alt='нет' width='300' height='250' />
          </div>
        )
      })}
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
          <label class="form-check-label" for="flexCheckDefault">
            Сортировать по дате
          </label>
      </div>
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
          <label class="form-check-label" for="flexCheckDefault">
            Сортировать по имени
          </label>
      </div>
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
          <label class="form-check-label" for="flexCheckDefault">
            Сортировать по размеру файла
          </label>
      </div>
      <div class="form-check px-5">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
          <label class="form-check-label" for="flexCheckDefault">
            Вернуть исходное состояние
          </label>
      </div>
   
      
    </div>
  );
}

export default Componentcard;
