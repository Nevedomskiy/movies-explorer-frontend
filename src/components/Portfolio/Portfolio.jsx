import './Portfolio.css';
import arrow from '../../images/arrow.svg';
import HoverLink from '../../blocks/HoverLink/HoverLink';

function Portfolio() {

   return (
      <section className='container portfolio-container' aria-label='Портфолио'>
         <h2 className='portfolio-title'>Портфолио</h2>
         <ul className='list portfolio-list'>
            <li className='portfolio-element '>
               <HoverLink
                  link={'https://github.com/Nevedomskiy/how-to-learn'}
                  modificBlock={'portfolio-element-link'}
                  modificText={'portfolio-element-description'}
                  text={'Статичный сайт'} >
                  <img
                     class='portfolio-link-icon'
                     src={arrow}
                     alt='Стрелка'
                  />
               </HoverLink>
            </li>
            <li className='portfolio-element '>
               <HoverLink
                  link={'https://github.com/Nevedomskiy/Travel-to-Russia'}
                  modificBlock={'portfolio-element-link'}
                  modificText={'portfolio-element-description'}
                  text={'Адаптивный сайт'} >
                  <img
                     class='portfolio-link-icon'
                     src={arrow}
                     alt='Стрелка'
                  />
               </HoverLink>
            </li>
            <li className='portfolio-element '>
               <HoverLink
                  link={'https://github.com/Nevedomskiy/react-mesto-auth'}
                  modificBlock={'portfolio-element-link'}
                  modificText={'portfolio-element-description'}
                  text={'Одностраничное приложение'} >
                  <img
                     class='portfolio-link-icon'
                     src={arrow}
                     alt='Стрелка'
                  />
               </HoverLink>

            </li>

         </ul>
      </section >
   );
}

export default Portfolio;