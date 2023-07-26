import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
   const navigate = useNavigate();

   return (

      <div className='not-found'>
         <div className='not-found-container'>
            <h1 className='not-found-title'>404</h1>
            <p className='not-found-description'>Страница не найдена</p>
         </div>
         <button onClick={() => navigate(-1)} className='button not-found-profile hover-link'>
            <p className='not-found-button-text'>Назад</p>
         </button>
      </div>

   );
}

export default NotFound;