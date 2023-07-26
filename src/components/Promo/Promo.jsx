import planet from '../../images/planet.svg';
import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {

   return (
      <section className='promo-conteiner' aria-label='Промо'>
         <img
            src={planet}
            className='promo-logo'
            alt='Планета-web' />
         <div className='promo-content'>
            <h1 className='promo-title'>Учебный проект студента факультета <span className='promo-word_nowrap'>Веб-разработки</span>.</h1>
            <h2 className='promo-subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
            <button className='promo-button button'><Link to='/sign-in' className='promo-button-text' >Узнать больше</Link></button>

         </div>
      </section>
   );
}

export default Promo;