import './Techs.css'
import Title from '../../blocks/Title/Title';

function Techs() {

   return (
      <section className='container techs-container' aria-label='Технологии в проекте'>
         <Title text={'Технологии'} modification={'techs-title'} />
         <h3 className='techs-subtitle'>7 технологий</h3>
         <p className='techs-description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

         <ul className='list techs-table'>
            <li className='techs-table-element'>HTML</li>
            <li className='techs-table-element'>CSS</li>
            <li className='techs-table-element'>JS</li>
            <li className='techs-table-element'>React</li>
            <li className='techs-table-element'>Git</li>
            <li className='techs-table-element'>Express.js</li>
            <li className='techs-table-element'>mongoDB</li>
         </ul>
      </section>
   );
}

export default Techs;