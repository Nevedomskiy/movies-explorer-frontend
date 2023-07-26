import './MoviesCard.css';

function MoviesCard({ list }) {
   return list.map((element) =>
      <li className='movies-card'>
         <div className='movies-card-description'>
            <p className='movies-card-description__name'>{element.name}</p>
            <p className='movies-card-description__time'>{element.time}</p>
         </div>
         <img className='movies-card-img' src={element.img} alt={element.name} />
         <button className='button movies-card-button movies-card-button_active hover-link'>Сохранить</button>
      </li>
   );
}

export default MoviesCard;