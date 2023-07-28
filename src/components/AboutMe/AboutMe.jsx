import './AboutMe.css'
import Title from '../../blocks/Title/Title';
import avatar from '../../images/Avatar.svg';
import HoverLink from '../../blocks/HoverLink/HoverLink';

function AboutMe() {

   return (
      <section className='about-me__container' aria-label='Обо мне'>
         <Title text={'Студент'} modification={'about-me__title'} />
         <img
            src={avatar}
            className='about-me__avatar'
            alt='Планета-web' />
         <h3 className='about-me__subtitle'>Виталий</h3>
         <p className='about-me__profetion'>Фронтенд-разработчик, 30 лет</p>
         <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

         <HoverLink
            link={'https://github.com/Nevedomskiy'}
            modificBlock={'about-me__link-git'}
            modificText={'about-me__text'}
            text={'Github'}>

         </HoverLink>
      </section>
   );
}

export default AboutMe;