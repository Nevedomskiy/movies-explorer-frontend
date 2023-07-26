import './Footer.css';
import HoverLink from '../../blocks/HoverLink/HoverLink';

function Footer() {

   return (
      <footer className='footer'>
         <div className='footer-container' aria-label='Описание сайта'>
            <h2 className='footer-title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer-content'>
               <ul className='list footer-list'>
                  <li className='footer-element '>
                     <HoverLink
                        link={'https://practicum.yandex.ru/'}
                        modificBlock={'footer-link footer-link_yandex'}

                        text={'Яндекс.Практикум'} >
                     </HoverLink>

                  </li>
                  <li className='footer-element'>
                     <HoverLink
                        link={'https://github.com/Nevedomskiy'}
                        modificBlock={'footer-link footer-link_git'}

                        text={'Github'} >
                     </HoverLink>
                  </li>
               </ul>
               <p className='footer-data'>© 2023</p>
            </div>
         </div>
      </footer >
   );
}

export default Footer;