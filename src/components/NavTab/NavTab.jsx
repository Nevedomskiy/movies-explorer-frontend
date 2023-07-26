import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab({ activeNav }) {

   return (
      <nav className={`nav ${activeNav ? 'nav_active' : ''}`}>
         <div className='nav-container'>
            <ul className='nav-list list'>
               <li className='nav-element'>
                  <Link to='/' className='button nav-button-home nav-element-button hover-link'>Главная</Link >
               </li>
               <li className='nav-element'>
                  <Link to='/movies' className='button nav-element-button hover-link'>Фильмы</Link >
               </li>
               <li className='nav-element'>
                  <Link to='/saved-movies' className='button nav-element-button hover-link'>Сохранённые фильмы</Link >
               </li>
            </ul>
            <Link to='/profile' className='button nav-button-profile hover-link'>Аккаунт</Link >
         </div>
      </ nav >
   );
}

export default NavTab;