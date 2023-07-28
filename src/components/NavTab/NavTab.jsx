import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab({ activeNav }) {

   return (
      <nav className={`nav ${activeNav ? 'nav_active' : ''}`}>
         <div className='nav__container'>
            <ul className='nav__list list'>
               <li className='nav__element nav-element'>
                  <Link to='/' className='button nav-element__button nav-element__button_home hover-link'>Главная</Link >
               </li>
               <li className='nav__element nav-element'>
                  <Link to='/movies' className='button nav-element__button hover-link'>Фильмы</Link >
               </li>
               <li className='nav__element nav-element'>
                  <Link to='/saved-movies' className='button nav-element__button hover-link'>Сохранённые фильмы</Link >
               </li>
            </ul>
            <Link to='/profile' className='nav__button-profile'>Аккаунт</Link >
         </div>
      </ nav >
   );
}

export default NavTab;