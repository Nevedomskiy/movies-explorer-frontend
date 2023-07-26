import './AboutProject.css'
import Title from '../../blocks/Title/Title';

function AboutProject() {

   return (
      <section className='container about-project-container' aria-label='О проекте - описание'>
         <Title text={'О проекте'} />
         <ul className='list about-project-info'>
            <li className='about-project-info-element'>
               <h3 className='about-project-subtitle'>Дипломный проект включал 5 этапов</h3>
               <p className='about-project-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </li>
            <li className='about-project-info-element'>
               <h3 className='about-project-subtitle '>На выполнение диплома ушло 5 недель</h3>
               <p className='about-project-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
         </ul>
         <ul className='list about-project-grafic'>
            <li className='about-project-grafic-element about-project-grafic-element_data'>1 неделя</li>
            <li className='about-project-grafic-element about-project-grafic-element_data'>4 недели</li>
            <li className='about-project-grafic-element about-project-grafic-element_name'>Back-end</li>
            <li className='about-project-grafic-element about-project-grafic-element_name'>Front-end</li>
         </ul>
      </section>
   );
}

export default AboutProject;