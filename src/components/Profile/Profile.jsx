// import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useContext, useEffect } from 'react';
import useInput from '../../utils/Validation/Validation';


function Profile({ logOut, editProfile, currentUser, handleUserInfo, textServerError }) {

   const userData = useContext(CurrentUserContext);
   console.log(userData)
   const [currentName, setCurrentName] = useState('');
   const [currentEmail, setCurrentEmail] = useState('');
   useEffect(() => {
      setCurrentName(currentUser.name);
      setCurrentEmail(currentUser.email);
   }, [currentUser])

   const email = useInput(currentEmail, {
      isEmpty: true,
      isEmail: true,
   });
   const name = useInput(currentName, {
      isEmpty: true,
      minLength: 2,
      maxLength: 30,
      isName: true,
   });
   const [activeInputs, setActiveInputs] = useState(false);



   function handleExit(e) {
      e.preventDefault();
      setActiveInputs(true)
   }

   function handleCancel(e) {
      e.preventDefault();
      setActiveInputs(false)
      email.onExit();
      name.onExit();
   }

   // function handleChangeName(e) {
   //    e.preventDefault();
   //    setUserName(e.target.value)
   // }

   // function handleChangeEmail(e) {
   //    e.preventDefault();
   //    setUserEmail(e.target.value)
   // }

   function handleSave(e) {
      e.preventDefault();
      setActiveInputs(false);
      editProfile({
         name: name.value,
         email: email.value,
      });
      handleUserInfo();
      email.onExit();
      name.onExit();
   }


   // console.log((currentName === name.value) && (currentEmail === email.value));
   return (
      <section className='profile'>
         <h1 className='profile__title'>Привет, {name.value}!</h1>
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
                        onChange={e => name.onChange(e)}
                        value={name.value}
                        name='name'
                        className={`profile__input profile__input_active ${!name.isValid ? 'profile__input_valid' : 'profile__input_no-valid'}`}></input>
                     :
                     <p className='profile__text'>{name.value}</p>
                  }
                  <div className='profile__errors errors'>
                     {(name.isDirty && (currentName === name.value)) && <div className='errors__element' >Имя соответствует ранее сохраненному значению</div>}
                     {(name.isDirty && name.isEmpty) && <div className='errors__element' >Поле не может быть пустым</div>}
                     {(name.isDirty && name.isName) && <div className='errors__element' >Используйте, пожалуйста, латиницу, кириллицу, пробел или дефис</div>}
                     {(name.isDirty && (name.minLengthError || name.maxLengthError)) && <div className='errors__element'>Некорректная длина</div>}
                  </div>
               </li>
               <li className='profile__element'>
                  <p className='profile__description'>E-mail</p>
                  {activeInputs
                     ?
                     <input
                        type='email'
                        required
                        onChange={e => email.onChange(e)}
                        value={email.value}
                        className={`profile__input profile__input_active ${!email.isValid ? 'profile__input_valid' : 'profile__input_no-valid'}`} ></input>
                     :
                     <p className='profile__text'>{email.value}</p>
                  }
                  <div className='profile__errors errors'>
                     {(email.isDirty && email.isEmpty) && <div className='errors__element' >Поле не может быть пустым</div>}
                     {(email.isDirty && email.isEmail) && <div className='errors__element' >Это не почта</div>}
                     {(email.isDirty && (currentEmail === email.value)) && <div className='errors__element' >Почта соответствует ранее сохраненному значению</div>}
                  </div>

               </li>
            </ul >

            <div className='profile__whitespace'></div>
            {activeInputs
               ?
               (((currentName === name.value) && (currentEmail === email.value)) ?
                  <button
                     type="button"
                     onClick={handleCancel}
                     className="profile__btn button hover-link profile__btn_cancel"
                  >
                     Отменить
                  </button>
                  :
                  <div className='profile__block-save'>
                     <p className={`profile__server-error ${textServerError !== '' ? 'errors__element' : ''}`}>{textServerError}</p>
                     <button
                        type="button"
                        onClick={handleSave}
                        disabled={email.isValid || name.isValid}
                        className={`profile__btn button hover-link  ${!(email.isValid || name.isValid) ? 'profile__btn_save' : 'profile__btn_blocked'}`}
                     >
                        Сохранить
                     </button>
                  </div>
               )
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