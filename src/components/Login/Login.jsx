import { Route, Routes } from 'react-router-dom';
import './Login.css';

import FormSign from '../../blocks/FormSign/FormSign';

function Login() {
   const inputList = [
      {
         value: 'email',
         text: 'E-mail',

      },
      {
         value: 'password',
         text: 'Пароль',
      }]

   return (
      <div className='login'>
         <Routes>
            <Route path='/'
               element={
                  <FormSign
                     inputList={inputList}
                     title={'Рады видеть!'}
                     nameButtonSubmit={'Войти'}
                     textAfterButton={'Ещё не зарегистрированы? '}
                     textLink={'Регистрация'}
                     linkValue={'sign-up'} >
                  </FormSign>
               }>
            </Route >

         </Routes >

      </div >
   );
}

export default Login;
