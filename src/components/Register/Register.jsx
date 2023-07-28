import { Route, Routes } from 'react-router-dom';
import './Register.css';

import FormSign from '../../blocks/FormSign/FormSign';

function Register() {
   const inputList = [
      {
         type: 'name',
         description: 'Имя',

      },
      {
         type: 'email',
         description: 'E-mail',

      },
      {
         type: 'password',
         description: 'Пароль',
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
                     modific={'register_mod-container'} >
                  </FormSign>
               }>
            </Route >

         </Routes >

      </div >
   );
}

export default Register;
