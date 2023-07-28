// import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
   return (
      <section className='profile'>
         <h1 className='profile__title'>Привет, Виталий!</h1>
         <form
            name={'profile-edit'}
            className="profile__form"
         >
            <ul className='profile__list list'>
               <li className='profile__element'>
                  <p className='profile__description'>Имя</p>
                  <input
                     required
                     className='profile__input'></input>
               </li>
               <li className='profile__element'>
                  <p className='profile__description'>E-mail</p>
                  <input
                     required
                     className='profile__input'></input>
               </li>
            </ul >

            <div className='profile__whitespace'></div>

            <button
               type="submit"
               className="profile__btn button profile__btn_edit hover-link"
            >
               Редактировать
            </button>
         </form >
         <button
            type="submit"
            className="profile__btn button profile__btn_signout hover-link"
         >
            Выйти из аккаунта
         </button>
      </section>


   );
}

export default Profile;