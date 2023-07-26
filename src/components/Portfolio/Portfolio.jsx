import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {

   return (
      <section className='container portfolio-container' aria-label='Портфолио'>
         <h2 className='portfolio-title'>Портфолио</h2>
         <ul className='list portfolio-list'>
            <li className='portfolio-element '>
               <a
                  href='https://github.com/Nevedomskiy/Travel-to-Russia'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='portfolio-element-link link hover-link'
               >
                  <p className='portfolio-element-description'>Статичный сайт</p>
                  <img
                     class='portfolio-link-icon'
                     src={arrow}
                     alt='Стрелка'
                  />
               </a>

            </li>
            <li className='portfolio-element '>
               <a
                  href='https://github.com/Nevedomskiy/Travel-to-Russia'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='portfolio-element-link link hover-link'
               >
                  <p className='portfolio-element-description'>Адаптивный сайт</p>
                  <img
                     class='portfolio-link-icon'
                     src={arrow}
                     alt='Стрелка'
                  />
               </a>

            </li>
            <li className='portfolio-element '>
               <a
                  href='https://github.com/Nevedomskiy/Travel-to-Russia'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='portfolio-element-link link hover-link'
               >
                  <p className='portfolio-element-description'>Одностраничное приложение</p>
                  <img
                     class='portfolio-link-icon'
                     src={arrow}
                     alt='Стрелка'
                  />
               </a>

            </li>

         </ul>
      </section>
   );
}

export default Portfolio;