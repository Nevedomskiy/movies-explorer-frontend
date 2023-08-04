import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';
import { inputListLogin } from '../../utils/constants/constants';

import FormSign from '../../blocks/FormSign/FormSign';

function Login({ logIn }) {

   const [formValue, setFormValue] = useState({
      email: '',
      password: '',
   })

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormValue({
         ...formValue,
         [name]: value
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!formValue.email || !formValue.password) {
         return;
      }
      logIn(formValue.email, formValue.password)
         .then(() => {
            setFormValue({
               email: '',
               password: '',
            });
         })
         .catch((err) => {
            err.then(({ message }) => console.log(message));
         });
   }

   return (
      <div className='login'>
         <Routes>
            <Route path='/'
               element={
                  <FormSign
                     inputList={inputListLogin}
                     title={'Рады видеть!'}
                     nameButtonSubmit={'Войти'}
                     textAfterButton={'Ещё не зарегистрированы? '}
                     textLink={'Регистрация'}
                     linkValue={'sign-up'}
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}
                  >
                  </FormSign>
               }>
            </Route >

         </Routes >

      </div >
   );
}

export default Login;
