// import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

import './Header.css';
import ButtonHome from '../../blocks/ButtonHome/ButtonHome';
import СommonElementHeader from '../../blocks/СommonElementHeader/СommonElementHeader';

function Header() {

   const [activeBurger, setActiveBurger] = useState(false);

   function handleClickBurger() {
      if (activeBurger === false) {
         setActiveBurger(true)
      }
      else {
         setActiveBurger(false)
      }
   }

   return (
      <header className='header'>
         <Routes>
            <Route path='/'
               element={
                  <div className='header-container'>
                     <ButtonHome modification={'header-link'}></ButtonHome>
                     <ul className='list header-list'>
                        <li className='header-element'><button className='button'><Link to='/sign-up' className='header-link'>Регистрация</Link></button></li>
                        <li className='header-element'><button className='button'><Link to='/sign-in' className='header-link header-link-green'>Войти</Link></button></li>
                     </ul>
                  </div>
               }>
            </Route>
            <Route path='/profile'
               element={
                  <СommonElementHeader handleClickBurger={handleClickBurger} activeBurger={activeBurger}></СommonElementHeader>
               }>
            </Route >
            <Route path='/movies'
               element={
                  <СommonElementHeader handleClickBurger={handleClickBurger} activeBurger={activeBurger}></СommonElementHeader>
               }>
            </Route >
            <Route path='/saved-movies'
               element={
                  <СommonElementHeader handleClickBurger={handleClickBurger} activeBurger={activeBurger}></СommonElementHeader>
               }>
            </Route >
         </Routes >

      </header >
   );
}

export default Header;


