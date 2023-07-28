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
            className="movies__form"
         >

            <input
               required
               type="text"
               className='movies__input'
               placeholder='Фильм'>
            </input>

            <button
               type="submit"
               className="button movies__button-search"
            >
               Найти
            </button>

         </form >

         <div className="movies__switch">
            <button className='button movies__button-switch movies__button-switch_active'></button>
            <p className='movies__description'>Короткометражки </p>
         </div>

         <ul className='movies__list list'>
            <MoviesCard list={moviesList} />
         </ul >

         {children}

      </section>


   );
}

export default Movies;