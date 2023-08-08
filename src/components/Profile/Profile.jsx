// import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState, useEffect } from 'react';
import useInput from '../../utils/Validation/Validation';


function Profile({ logOut, editProfile, textServerError, activeInputs, setActiveInputs, succesReq }) {

   const userData = useContext(CurrentUserContext);

   const [userEmail, setUserEmail] = useState('');


   // useEffect(() => {
   //    if (userData !== undefined) {
   //       setUserEmail(userData.email);
   //    }
   // }, [userData]);

   const { value: emailValue, onChange: emailOnChange, onExit: emailOnExit,
      isDirty: emailIsDirty, isValid: emailIsValid, isEmpty: emailIsEmpty, isEmail: emailIsEmail } = useInput(userEmail, {
         isEmpty: true,
         isEmail: true,
      });

   console.log(emailValue)
   const name = useInput('', {
      isEmpty: true,
      minLength: 2,
      maxLength: 30,
      isName: true,
   });

   console.log(((userData.name === name.value) && (userData.email === emailValue)) || ((name.value === '') && (emailValue === '')));
   console.log(((userData.name === name.value) && (userData.email === emailValue)));
   console.log(((name.value === '') && (emailValue === '')));

   function handleExit(e) {
      e.preventDefault();
      setUserEmail(userData.email);
      setActiveInputs(true)
      emailOnExit();
      name.onExit();
   }

   function handleCancel(e) {
      e.preventDefault();
      setActiveInputs(false);
      emailOnExit();
      name.onExit();
   }

   function handleSave(e) {
      e.preventDefault();
      editProfile({
         name: name.value,
         email: emailValue,
      });
      emailOnExit();
      name.onExit();
   }

   return (
      <section className='profile'>
         <h1 className='profile__title'>Привет, {userData.name}!</h1>
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
                        onChange={e => {
                           name.onChange(e);
                        }}
                        value={name.value}
                        name='name'
                        placeholder={userData.name}
                        className={`profile__input profile__input_active ${!name.isValid ? 'profile__input_valid' : 'profile__input_no-valid'}`}></input>
                     :
                     <p className='profile__text'>{userData.name}</p>
                  }
                  <div className='profile__errors errors'>
                     {(name.isDirty && (userData.name === name.value)) && <p className='errors__info' >Имя соответствует ранее сохраненному значению</p>}
                     {(name.isDirty && name.isEmpty) && <p className='errors__element' >Поле не может быть пустым</p>}
                     {(name.isDirty && name.isName) && <p className='errors__element' >Используйте, пожалуйста, латиницу, кириллицу, пробел или дефис</p>}
                     {(name.isDirty && (name.minLengthError || name.maxLengthError)) && <p className='errors__element'>Некорректная длина</p>}
                  </div>
               </li>
               <li className='profile__element'>
                  <p className='profile__description'>E-mail</p>
                  {activeInputs
                     ?
                     <input
                        type='email'
                        required
                        onChange={e => emailOnChange(e)}
                        value={emailValue}
                        className={`profile__input profile__input_active ${!emailIsValid ? 'profile__input_valid' : 'profile__input_no-valid'}`} ></input>
                     :
                     <p className='profile__text'>{userData.email}</p>
                  }
                  <div className='profile__errors errors'>
                     {(emailIsDirty && emailIsEmpty) && <p className='errors__element' >Поле не может быть пустым</p>}
                     {(emailIsDirty && emailIsEmail) && <p className='errors__element' >Почта не валидна</p>}
                     {(emailIsDirty && (userData.email === emailValue)) && <p className='errors__info' >Почта соответствует ранее сохраненному значению</p>}
                  </div>

               </li>
            </ul >

            <div className='profile__whitespace'></div>
            {activeInputs
               ?
               ((((userData.name === name.value) && (userData.email === emailValue)) || ((name.value === '') && (emailValue === ''))) ?
                  <button
                     type="button"
                     onClick={handleCancel}
                     className="profile__btn button hover-link profile__btn_cancel"
                  >
                     Отменить
                  </button>
                  :
                  <div className='profile__block-save errors'>
                     {(textServerError !== '' && !emailIsDirty) && <p className='profile__server-info profile__server-info_error'>{textServerError}</p>}
                     <button
                        type="button"
                        onClick={handleSave}
                        disabled={emailIsValid || name.isValid}
                        className={`profile__btn button hover-link  ${(!(emailIsValid || name.isValid)) ? 'profile__btn_save' : 'profile__btn_blocked'}`}
                     >
                        Сохранить
                     </button>
                  </div>
               )
               :
               <div className='profile__block-save'>
                  {(succesReq) && <p className='profile__server-info'>Данные успешно изменены</p>}

                  <button
                     type="button"
                     onClick={handleExit}
                     className="profile__btn button profile__btn_edit hover-link"
                  >
                     Редактировать
                  </button>
               </div>
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