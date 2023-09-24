
import './App.css';

import { useNavigate } from 'react-router-dom';



export default function Tree() {
   //  создаем хук чтобы организовать навигацию
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }


  return (
    <div className='body'>
   
   <div class="form-check px-3">
        <input type="checkbox" class="btn-check  bg-dark"  onClick={handleClick} id="btn-check-outlined" autocomplete="off" />
        <label class="btn btn-outline-primary" for="btn-check-outlined">перейти на страницу</label>
        </div>
    </div>
  );
}


