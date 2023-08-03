import './MoviesCard.css';
import ButtonSaveMovie from '../../blocks/ButtonСhangeMovie/ButtonСhangeMovie';
import { mainApi } from '../../utils/MainApi/MainApi';
import { MOVIES_URL } from '../../utils/constants/constants';
import { useState, useEffect } from 'react';

function MoviesCard({ movie, location, checkSavedMovies, moviesSavedList }) {

   const [movieIsSaved, setMovieIsSaved] = useState(false);
   const [savedMovieId, setSavedMovieId] = useState('');



   useEffect(() => {
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
            <p className='movies-card__time'>{movie.duration}</p>
         </div>
         <img className='movies-card__img' src={movie.image.url ? (`${MOVIES_URL}${movie.image.url}`) : (movie.image)} alt={movie.nameRU} />
         <ButtonSaveMovie location={location} handleSaveMovie={handleSaveMovie} MOVIES_URL={MOVIES_URL} movieIsSaved={movieIsSaved} handleDeleteMovie={handleDeleteMovie} />

      </li>
   )
}

export default MoviesCard;