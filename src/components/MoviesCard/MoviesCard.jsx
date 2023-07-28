import './MoviesCard.css';

function MoviesCard({ list, savedMovies }) {

   return list.map((element) =>
      <li className='movies-card'>
         <div className='movies-card__description'>
            <p className='movies-card__name'>{element.name}</p>
            <p className='movies-card__time'>{element.time}</p>
         </div>
         <img className='movies-card__img' src={element.img} alt={element.name} />
         <button className={`button hover-link movies-card__button ${savedMovies ? 'movies-card__button_active' : ''}`}>Сохранить</button>
      </li>
   );
}

export default MoviesCard;