import './СommonElementHeader.css';

import ButtonHome from '../../blocks/ButtonHome/ButtonHome';
import NavTab from '../../components/NavTab/NavTab';

function СommonElementHeader({ handleClickBurger, activeBurger }) {

   return (
      <div className='header__container header__container_profile'>
         <ButtonHome modification={'header__link header__link_home-profile'}></ButtonHome>
         <button onClick={handleClickBurger} className={`button burger ${activeBurger ? ' burger_active' : ''}`}>
            <div className={`burger-line ${activeBurger ? ' burger-first-line' : ''}`}></div>
            <div className={`burger-line ${activeBurger ? ' burger-second-line' : ''}`}></div>
            <div className={`burger-line ${activeBurger ? ' burger-third-line' : ''}`}></div>
         </button >
         <NavTab activeNav={activeBurger}></NavTab>
      </div>
   );
}

export default СommonElementHeader;