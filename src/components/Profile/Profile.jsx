// import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import useInput from '../../utils/Validation/Validation';


function Profile({ logOut, editProfile, textServerError, activeInputs, setActiveInputs, succesReq }) {

   const userData = useContext(CurrentUserContext);

   
   let email = useInput(userData.email, {
      isEmpty: true,
      isEmail: true,
   });
   let name = useInput(userData.name, {
      isEmpty: true,
      minLength: 2,
      maxLength: 30,
      isName: true,
   });

   console.log(email);
   console.log(name);

   function handleExit(e) {
      e.preventDefault();
      setActiveInputs(true)
      email.onExit();
      name.onExit();
   }

   function handleCancel(e) {
      e.preventDefault();
      setActiveInputs(false);
      email.onExit();
      name.onExit();
   }

   function handleSave(e) {
      e.preventDefault();
      editProfile({
         name: name.value,
         email: email.value,
      });
      email.onExit();
      name.onExit();
   }

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
                        onChange={e => {
                           name.onChange(e);
                        }}
                        value={name.value}
                        name='name'
                        className={`profile__input profile__input_active ${!name.isValid ? 'profile__input_valid' : 'profile__input_no-valid'}`}></input>
                     :
                     <p className='profile__text'>{name.value}</p>
                  }
                  <div className='profile__errors errors'>
                     {(name.isDirty && (userData.name === name.value)) && <p className='errors__element' >Имя соответствует ранее сохраненному значению</p>}
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
                        onChange={e => email.onChange(e)}
                        value={email.value}
                        className={`profile__input profile__input_active ${!email.isValid ? 'profile__input_valid' : 'profile__input_no-valid'}`} ></input>
                     :
                     <p className='profile__text'>{email.value}</p>
                  }
                  <div className='profile__errors errors'>
                     {(email.isDirty && email.isEmpty) && <p className='errors__element' >Поле не может быть пустым</p>}
                     {(email.isDirty && email.isEmail) && <p className='errors__element' >Почта не валидна</p>}
                     {(email.isDirty && (userData.email === email.value)) && <p className='errors__element' >Почта соответствует ранее сохраненному значению</p>}
                  </div>

               </li>
            </ul >

            <div className='profile__whitespace'></div>
            {activeInputs
               ?
               (((userData.name === name.value) && (userData.email === email.value)) ?
                  <button
                     type="button"
                     onClick={handleCancel}
                     className="profile__btn button hover-link profile__btn_cancel"
                  >
                     Отменить
                  </button>
                  :
                  <div className='profile__block-save errors'>
                     {(textServerError !== '' && !email.isDirty) && <p className='profile__server-info profile__server-info_error'>{textServerError}</p>}
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