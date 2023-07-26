import './Movies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';


function Movies({ moviesList, children }) {

   const location = useLocation();

   console.log(location)

   return (
      <section className={`movies ${location.pathname === '/movies' ? ' movies_edit-margin' : ''}`}>
         <form
            name={'movies-search'}
            className="movies-form"
            noValidate
         >

            <input
               required
               type="text"
               className='movies-form-input'
               placeholder='Фильм'>
            </input>

            <button
               type="submit"
               className="button movies-form-button"
            >
               Найти
            </button>

         </form >

         <div className="movies-switch">
            <button className='button movies-switch-film movies-switch-film_active'></button>
            <p className='movies-switch-description'>Короткометражки </p>
         </div>

         <ul className='movies-list list'>
            <MoviesCard list={moviesList} />
         </ul >

         {children}

      </section>


   );
}

export default Movies;