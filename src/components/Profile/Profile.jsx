// import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
   return (
      <section className='profile'>
         <h1 className='profile-title'>Привет, Виталий!</h1>
         <form
            name={'profile-edit'}
            className="profile-form"
            noValidate
         >
            <ul className='profile-form-inputs-list list'>
               <li className='profile-form-element'>
                  <p className='profile-form-description'>Имя</p>
                  <input
                     required
                     className='profile-form-input'></input>
               </li>
               <li className='profile-form-element'>
                  <p className='profile-form-description'>E-mail</p>
                  <input
                     required
                     className='profile-form-input'></input>
               </li>
            </ul >

            <div className='profile-whitespace'></div>

            <button
               type="submit"
               className="profile-btn button profile-btn-edit"
            >
               Редактировать
            </button>
         </form >
         <button
            type="submit"
            className="profile-btn button profile-btn-signout"
         >
            Выйти из аккаунта
         </button>
      </section>


   );
}

export default Profile;