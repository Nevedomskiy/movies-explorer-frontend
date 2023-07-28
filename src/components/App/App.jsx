import { Routes, Route } from 'react-router-dom';
// ,useNavigate
// import '../index.css';
import Header from '../Header/Header';
import './App.css'
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import pic from '../../images/pic.png';

function App() {
   //Временный список - для верстки
   const filmList = [
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
   ]

   const savedFilmList = [
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
      {
         name: "В погоне за Бенкси",
         time: '27 минут',
         img: pic
      },
   ]

   return (
      // <CurrentUserContext.Provider value={currentUser}>



      <div className='bodywork'>
         <div className='page'>
            <Header />

            <Routes >
               <Route path='/sign-up' element={<Register />} />
               <Route path='/sign-in' element={<Login />} />
               <Route path='/movies' element={<Movies moviesList={filmList}><button className='button movies__button-add-more-film'>Ещё</button></Movies>} />
               <Route path='/saved-movies' element={<Movies moviesList={savedFilmList} />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/' element={<Main />} />
               <Route path="*" element={<NotFound />} />
            </Routes>


            <Routes >
               <Route path='/movies' element={<Footer />} />
               <Route path='/saved-movies' element={<Footer />} />
               <Route path='/' element={<Footer />} />
            </Routes>


         </div >
      </div >
      // </CurrentUserContext.Provider>
   );
}

export default App;