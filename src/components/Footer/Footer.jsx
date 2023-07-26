import './Footer.css';

function Footer() {

   return (
      <footer className='footer'>
         <div className='footer-container' aria-label='Описание сайта'>
            <h2 className='footer-title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer-content'>
               <ul className='list footer-list'>
                  <li className='footer-element '>
                     <a
                        href='https://practicum.yandex.ru/'
                        className='footer-link footer-link_yandex link'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        Яндекс.Практикум
                     </a>

                  </li>
                  <li className='footer-element'>
                     <a
                        href='https://github.com/Nevedomskiy'
                        className='footer-link footer-link_git link'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        Github
                     </a>
                  </li>
               </ul>
               <p className='footer-data'>© 2023</p>
            </div>
         </div>
      </footer >
   );
}

export default Footer;