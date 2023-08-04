import './Movies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';

function Movies({ setTextSearchError, moviesList, isLoading, width, location, textSearchError, setIsLoading, isValid, setIsValid, checkSavedMovies, moviesSavedList }) {
   const [failedSearch, setFailedSearch] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const [currentMoviesList, setCurrentMoviesList] = useState([]);
   const [quantityMovies, setQuantityMovies] = useState(null);
   const [newMovies, setNewMovies] = useState(null);
   const [isShortMovie, setIsShortMovie] = useState(false);
   // console.log(moviesList)

   useEffect(() => {
      if ((localStorage.getItem('inputSearchMovies') !== null) && (location.pathname === '/movies')) {
         setSearchValue(localStorage.getItem('inputSearchMovies'));
         updateQuantityMovies();
         return
      } else if ((localStorage.getItem('inputSearchSaved') !== null) && (location.pathname === '/saved-movies')) {
         setSearchValue(localStorage.getItem('inputSearchSaved'));
         updateQuantityMovies();
         return
      } else {
         setSearchValue('');
         return
      }
   }, [location])

   // console.log(searchValue)

   useEffect(() => {
      if (searchValue !== null) {
         if (location.pathname === '/movies') {
            localStorage.setItem('inputSearchMovies', searchValue);
         } else {
            localStorage.setItem('inputSearchSaved', searchValue);
         }
      }
   }, [searchValue])
   // console.log(searchValue)
   // console.log(localStorage.getItem('inputSearch'));

   useEffect(() => {
      requestVerification();
   }, [currentMoviesList])

   useEffect(() => {
      setCurrentMoviesList(moviesList);
      updateQuantityMovies(moviesList);
   }, [moviesList, isShortMovie])

   function isSmoll(value) {
      return 40 >= value;
   }
   // console.log(currentMoviesList)

   function updateQuantityMovies() {
      if (!searchValue) {
         if (isShortMovie) {
            setCurrentMoviesList(moviesList.filter((el) => isSmoll(el.duration)).slice(0, quantityMovies));
            return
         } else {
            setCurrentMoviesList(moviesList.slice(0, quantityMovies));
            return
         }
      } else {
         if (isShortMovie) {
            setCurrentMoviesList(moviesList.filter((el) => isSmoll(el.duration)).filter((el) => el.nameRU.toLowerCase().includes(searchValue.toLowerCase())).slice(0, quantityMovies));
            return
         } else {
            setCurrentMoviesList(moviesList.filter((el) => el.nameRU.toLowerCase().includes(searchValue.toLowerCase())).slice(0, quantityMovies));
            return
         }
      }
   }

   useEffect(() => {
      updateQuantityMovies();
   }, [quantityMovies])

   useEffect(() => {
      handleQuantityMovies();
      updateQuantityMovies();
   }, [width])

   function handleChangeSearch(e) {
      e.preventDefault();
      setSearchValue(e.target.value);
   }

   function handleQuantityMovies() {
      if (width > 1280) {
         setQuantityMovies(12);
         setNewMovies(3);
         return;
      } else if ((480 < width) && (width < 1280)) {
         setQuantityMovies(8);
         setNewMovies(2);
         // console.log(1)
         return;
      } else {
         // console.log(2)
         setQuantityMovies(5);
         setNewMovies(2);
         return;
      }
   }


   function handleClickButtonSwitch() {
      if (isShortMovie) {
         setIsShortMovie(false)
      } else {
         setIsShortMovie(true)
      }
      updateQuantityMovies();
   }
   // console.log((768 < width) && (width < 1280))

   function requestVerification() {
      if (currentMoviesList.length === 0) {
         setFailedSearch(true);
         return;
      } else {
         setFailedSearch(false);
         return;
      }
   }

   function handleAddMoreMovies() {
      setQuantityMovies((a) => a + newMovies);
      // updateQuantityMovies(list);
   }

   function handleSubmitSearch(e) {
      e.preventDefault();
      setIsLoading(true)
      if (searchValue === (undefined || '')) {
         setIsValid(true);
         setTextSearchError('Нужно ввести ключевое слово');
         setIsLoading(false);
      } else {
         setCurrentMoviesList(moviesList.filter((el) => el.nameRU.toLowerCase().includes(searchValue.toLowerCase())).slice(0, quantityMovies));
         // updateQuantityMovies(currentMoviesList);
         setIsValid(false);
         setIsLoading(false);
         // console.log(currentMoviesList)
      }
   }

   return (
      <section className={`movies ${location.pathname === '/movies' ? ' movies_edit-margin' : ''}`}>
         <form
            name={'movies-search'}
            className="movies__form"
            onSubmit={handleSubmitSearch}
            noValidate
         >

            <input
               type="text"
               name='movies-input'
               className='movies__input'
               placeholder='Фильм'
               value={searchValue}
               onChange={(e) => {
                  handleChangeSearch(e);
                  handleQuantityMovies();
               }}
            >
            </input>

            <span className={`movies__input-error ${isValid ? 'movies__input-error_active' : ''}`}>{textSearchError}</span>

            <button
               type="submit"
               className="button movies__button-search"
            >
               Найти
            </button>

         </form >

         <div className="movies__switch">
            <button type='button' onClick={handleClickButtonSwitch} className={`button movies__button-switch ${isShortMovie ? 'movies__button-switch_active' : ''}`}></button>
            <p className='movies__description'>Короткометражки</p>
         </div>

         {isLoading
            ?
            (
               <Preloader />
            ) :
            (
               failedSearch
                  ?
                  (
                     <p className='movies__description'>Ничего не найдено </p>
                  ) :
                  (
                     <div className="movies__content">
                        <ul className='list movies__list'>
                           {currentMoviesList.map((element) =>
                              <MoviesCard movie={element} key={element.id || element._id} location={location} checkSavedMovies={checkSavedMovies} moviesSavedList={moviesSavedList} />)}
                        </ul >
                        {((location.pathname === '/movies') && (currentMoviesList.length >= quantityMovies)) ? (<button type="button" className='button movies__button-add-more-film' onClick={() => { handleAddMoreMovies() }} > Ещё</button>) : ''}

                     </div>
                  )
            )
         }



      </section >


   );
}

export default Movies;