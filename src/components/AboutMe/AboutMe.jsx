import './AboutMe.css'
import Title from '../../blocks/Title/Title';
import avatar from '../../images/Avatar.svg';

function AboutMe() {

   return (
      <section className='about-me-container' aria-label='Обо мне'>
         <Title text={'Студент'} modification={'about-me-title'} />
         <img
            src={avatar}
            className='about-me-avatar'
            alt='Планета-web' />
         <h3 className='about-me-subtitle'>Виталий</h3>
         <p className='about-me-profetion'>Фронтенд-разработчик, 30 лет</p>
         <p className='about-me-description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
         <button className='about-me-button button'>Github</button>
      </section>
   );
}

export default AboutMe;