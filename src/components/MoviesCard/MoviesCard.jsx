import './MoviesCard.css';
import ButtonSaveMovie from '../../blocks/ButtonСhangeMovie/ButtonСhangeMovie';
import { MOVIES_URL } from '../../utils/constants/constants';
import { useState, useEffect } from 'react';

function MoviesCard({ movie, location, addMovie, deleteMovie, isLoading, listIdNewCards }) {

   const [movieIsSaved, setMovieIsSaved] = useState(false);
   const [savedMovieId, setSavedMovieId] = useState(null);
   const [movieTime, setMovieTime] = useState('');

   useEffect(() => {
      handleMovieTime(movie.duration);
      if (location.pathname === '/movies') {
         checkMovieIsSaved();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [listIdNewCards, savedMovieId])

   useEffect(() => {
      if (listIdNewCards) {
         handleMovieId();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [listIdNewCards, movie])

   function handleMovieId() {
      const check = listIdNewCards.find((element) => element.movieId === movie.id);
      if ((location.pathname === '/movies') && (check !== undefined)) {
         setSavedMovieId(check.id);
         return
      } else {
         setSavedMovieId(movie._id);
      }
   }

   console.log(movie._id)

   function handleSaveMovie() {
      const { country, director, duration, year, description, trailerLink, id: movieId, nameRU, nameEN } = movie;
      const thumbnail = `${MOVIES_URL}${movie.image.formats.thumbnail.url}`;
      const image = `${MOVIES_URL}${movie.image.url}`;

      if (!movieIsSaved) {
         addMovie({ country, director, duration, year, description, trailerLink, image, movieId, nameRU, nameEN, thumbnail })
      }
   }

   function handleMovieTime(time) {
      const minute = time % 60;
      const hour = (time - minute) / 60;
      if (hour === 0) {
         setMovieTime(`${minute} минут`);
      } else {
         setMovieTime(`${hour} час ${minute} минут`);
      }
   }

   const checkMovieIsSaved = () => {
      if (savedMovieId !== ('' || undefined)) {
         setMovieIsSaved(true);
         return
      } else {
         setMovieIsSaved(false);
      }
   }

   function handleDeleteMovie() {
      deleteMovie(savedMovieId);
   }

   return (
      <li className='movies-card' key={movie._id}>

         <div className='movies-card__description'>
            <p className='movies-card__name'>{movie.nameRU}</p>
            <p className='movies-card__time'>{movieTime}</p>
         </div>

         <a
            href={movie.trailerLink}
            target='_blank'
            rel='noopener noreferrer'
            className='movies-card__link'
         >
            <img className='movies-card__img' src={movie.image.url ? (`${MOVIES_URL}${movie.image.url}`) : (movie.image)} alt={movie.nameRU} />
         </a>

         <ButtonSaveMovie location={location} isLoading={isLoading} handleSaveMovie={handleSaveMovie} MOVIES_URL={MOVIES_URL} movieIsSaved={movieIsSaved} handleDeleteMovie={handleDeleteMovie} />

      </li>
   )
}

export default MoviesCard;