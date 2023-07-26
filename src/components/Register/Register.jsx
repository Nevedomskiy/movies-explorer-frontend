import { Route, Routes } from 'react-router-dom';
import './Register.css';

import FormSign from '../../blocks/FormSign/FormSign';

function Register() {
   const inputList = [
      {
         value: 'name',
         text: 'Имя',

      },
      {
         value: 'email',
         text: 'E-mail',

      },
      {
         value: 'password',
         text: 'Пароль',
      }]

   return (
      <div className='register'>
         <Routes>
            <Route path='/'
               element={
                  <FormSign
                     inputList={inputList}
                     title={'Добро пожаловать!'}
                     nameButtonSubmit={'Зарегистрироваться'}
                     textAfterButton={'Уже зарегистрированы? '}
                     textLink={'Войти'}
                     linkValue={'sign-in'}
                     modific={'register-mod-container'} >
                  </FormSign>
               }>
            </Route >

         </Routes >

      </div >
   );
}

export default Register;
