// import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useContext, useEffect } from 'react';

function Profile({ logOut, editProfile, handleUserInfo }) {
   const userData = useContext(CurrentUserContext);
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [activeInputs, setActiveInputs] = useState(false);

   useEffect(() => {
      setUserName(userData.name);
      setUserEmail(userData.email);
   }, [userData])
   console.log(activeInputs)

   function handleExit(e) {
      e.preventDefault();
      setActiveInputs(true)
   }

   function handleChangeName(e) {
      e.preventDefault();
      setUserName(e.target.value)
   }

   function handleChangeEmail(e) {
      e.preventDefault();
      setUserEmail(e.target.value)
   }

   function handleSave(e) {
      e.preventDefault();
      setActiveInputs(false);
      editProfile({
         name: userName,
         email: userEmail
      });
      handleUserInfo();
   }


   // console.log(userData);
   return (
      <section className='profile'>
         <h1 className='profile__title'>Привет, {userName}!</h1>
         <form
            name={'profile-edit'}
            className="profile__form"
            noValidate
         >
            <ul className='profile__list list'>
               <li className='profile__element'>
                  <p className='profile__description'>Имя</p>
                  {activeInputs
                     ?
                     <input
                        type='text'
                        required
                        onChange={handleChangeName}
                        value={userName}
                        className='profile__input'></input>
                     :
                     <p className='profile__input'>{userName}</p>
                  }
               </li>
               <li className='profile__element'>
                  <p className='profile__description'>E-mail</p>
                  {activeInputs
                     ?
                     <input
                        type='email'
                        required
                        onChange={handleChangeEmail}
                        value={userEmail}
                        className='profile__input'></input>
                     :
                     <p className='profile__input'>{userEmail}</p>
                  }
               </li>
            </ul >

            <div className='profile__whitespace'></div>
            {activeInputs
               ?
               <button
                  type="button"
                  onClick={handleSave}
                  className="profile__btn button profile__btn_save hover-link"
               >
                  Сохранить
               </button>
               :
               <button
                  type="button"
                  onClick={handleExit}
                  className="profile__btn button profile__btn_edit hover-link"
               >
                  Редактировать
               </button>
            }
         </form >
         <button
            type="button"
            onClick={logOut}
            className="profile__btn button profile__btn_signout hover-link"
         >
            Выйти из аккаунта
         </button>
      </section >


   );
}

export default Profile;