import './MoviesCard.css';
import ButtonSaveMovie from '../../blocks/ButtonСhangeMovie/ButtonСhangeMovie';
import { mainApi } from '../../utils/MainApi/MainApi';
import { MOVIES_URL } from '../../utils/constants/constants';
import { useState, useEffect } from 'react';

function MoviesCard({ movie, location, checkSavedMovies, moviesSavedList }) {

   const [movieIsSaved, setMovieIsSaved] = useState(false);
   const [savedMovieId, setSavedMovieId] = useState(null);
   const [movieTime, setMovieTime] = useState('');

   useEffect(() => {
      handleMovieTime(movie.duration);
      if (location.pathname === '/movies') {
         checkMovieIsSaved();
      }
   }, [moviesSavedList, savedMovieId])

   useEffect(() => {
      if (moviesSavedList) {
         // console.log(123)
         handleMovieId();
      }
   }, [moviesSavedList])

   // console.log(movie._id)
   // console.log(savedMovieId)
   // console.log((moviesSavedList.find((element) => element.movieId === movie.id)));

   function handleMovieId() {
      const check = moviesSavedList.find((element) => element.movieId === movie.id);
      if ((location.pathname === '/movies') && (check !== undefined)) {
         setSavedMovieId(check._id);
         return
      } else {
         setSavedMovieId(movie._id);
      }

   }

   function handleSaveMovie() {
      const { country, director, duration, year, description, trailerLink, id: movieId, nameRU, nameEN } = movie;
      const thumbnail = `${MOVIES_URL}${movie.image.formats.thumbnail.url}`;
      const image = `${MOVIES_URL}${movie.image.url}`;

      if (!movieIsSaved) {
         mainApi.addMovie({ country, director, duration, year, description, trailerLink, image, movieId, nameRU, nameEN, thumbnail })
            .then((movies) => {
               checkSavedMovies();
            })
            .catch((err) => console.log(err));
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

   // console.log(movieTime);


   const checkMovieIsSaved = () => {
      // const check = moviesSavedList.find((element) => element.movieId === movie.id);
      // console.log(check)
      if (savedMovieId !== ('' || undefined)) {
         setMovieIsSaved(true);
         return
      } else {
         setMovieIsSaved(false);
      }
   }

   function handleDeleteMovie() {
      mainApi.deleteMovie(savedMovieId)
         .then((movies) => {
            checkSavedMovies();
         })
         .catch((err) => console.log(err));
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

         <ButtonSaveMovie location={location} handleSaveMovie={handleSaveMovie} MOVIES_URL={MOVIES_URL} movieIsSaved={movieIsSaved} handleDeleteMovie={handleDeleteMovie} />

      </li>
   )
}

export default MoviesCard;