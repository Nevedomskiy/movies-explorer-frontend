import './СommonElementHeader.css';

import ButtonHome from '../../blocks/ButtonHome/ButtonHome';
import NavTab from '../../components/NavTab/NavTab';

function СommonElementHeader({ handleClickBurger, activeBurger }) {

   return (
      <div className='header-container header-container_profile'>
         <ButtonHome modification={'header-link header-link-home_profile'}></ButtonHome>
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