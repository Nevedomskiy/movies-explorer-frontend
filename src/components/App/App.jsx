import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useResize } from '../UseResize/UseResize';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi/MainApi';
import { moviesApi } from '../../utils/MoviesApi/MoviesApi';

function App() {
   const location = useLocation();
   const { width } = useResize();
   const navigate = useNavigate();
   const [isValidSearch, setIsValidSearch] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [currentUser, setCurrentUser] = useState();
   const [allMovies, setAllMovies] = useState([]);
   const [savedMovies, setSavedMovies] = useState([]);
   const [loggedIn, setLoggedIn] = useState(true);
   const [textSearchError, setTextSearchError] = useState('');


   useEffect(() => {
      mainApi.getUserInfo()
         .then((user) => {
            setCurrentUser(user);
            setLoggedIn(true);
         })
         .catch((err) => {
            localStorage.clear();
            console.log(err);
         })
   }, []);

   // console.log(currentUser)

   useEffect(() => {
      setIsLoading(true);
      if (loggedIn) {
         heandleAllMovies();
         checkSavedMovies();
      }
   }, [loggedIn, location]);

   // const handleLogin = () => {
   //    if (loggedIn) {
   //       setLoggedIn(false);
   //    } else {
   //       setLoggedIn(true);
   //    }
   // }

   const checkSavedMovies = () => {
      mainApi.getSavedMovies()
         .then((movies) => {
            setSavedMovies(movies);
            setIsLoading(false);
            setIsValidSearch(false);
         })
         .catch((err) => {
            setTextSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            if (isValidSearch) {
               setIsValidSearch(true);
            }
         });
   }

   // console.log(loggedIn);

   const logOut = () => {
      mainApi.signOut()
         .then((res) => {
            setCurrentUser({});
            setLoggedIn(false);
            localStorage.clear();
         })
         .catch((err) => {
            console.log(err);
         });
   }

   const editProfile = (data) => {
      mainApi.changeUserInfo(data)
         .then((res) => {
            setCurrentUser(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }
   // console.log(savedMovies)

   const heandleAllMovies = () => {
      setIsLoading(true);
      moviesApi.getAllMovies()
         .then((movies) => {
            setAllMovies(movies);
            setIsLoading(false);
            setIsValidSearch(false);
         })
         .catch((err) => {
            setTextSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            if (!isValidSearch) {
               setIsValidSearch(true);
            }
         });
   }



   return (
      <CurrentUserContext.Provider value={currentUser}>



         <div className='bodywork' >
            <div className='page' >
               <Header loggedIn={loggedIn} />

               <Routes >
                  <Route path='/' element={<Main />} />
                  <Route path='/sign-up' element={<Register />} />
                  <Route path='/sign-in' element={<Login setLoggedIn={setLoggedIn} />} />
                  <Route
                     path="/movies"
                     element={
                        <ProtectedRouteElement
                           loggedIn={loggedIn}
                           moviesList={allMovies}
                           moviesSavedList={savedMovies}
                           isValid={isValidSearch}
                           setIsValid={setIsValidSearch}
                           // requestMovies={requestMovies}
                           isLoading={isLoading}
                           width={width}
                           location={location}
                           setIsLoading={setIsLoading}
                           element={Movies}
                           checkSavedMovies={checkSavedMovies}
                           setTextSearchError={setTextSearchError}
                           textSearchError={textSearchError}
                        >
                        </ProtectedRouteElement>
                     }
                  />
                  <Route
                     path="/saved-movies"
                     element={
                        <ProtectedRouteElement
                           loggedIn={loggedIn}
                           width={width}
                           isValid={isValidSearch}
                           setIsValid={setIsValidSearch}
                           isLoading={isLoading}
                           setIsLoading={setIsLoading}
                           moviesList={savedMovies}
                           location={location}
                           element={Movies}
                           moviesSavedList={savedMovies}
                           checkSavedMovies={checkSavedMovies}
                           setTextSearchError={setTextSearchError}
                           textSearchError={textSearchError}
                        >
                        </ProtectedRouteElement>
                     }
                  />
                  <Route
                     path="/profile"
                     element={
                        <ProtectedRouteElement
                           loggedIn={loggedIn}
                           element={Profile}
                           logOut={logOut}
                           editProfile={editProfile}
                        >
                        </ProtectedRouteElement>
                     }
                  />
                  <Route path="*" element={<NotFound />} />
               </Routes>


               <Routes >
                  <Route path='/movies' element={<Footer />} />
                  <Route path='/saved-movies' element={<Footer />} />
                  <Route path='/' element={<Footer />} />
               </Routes>


            </div >
         </div >
      </CurrentUserContext.Provider>
   );
}

export default App;