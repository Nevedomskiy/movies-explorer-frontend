import { Route, Routes, } from 'react-router-dom';
import { useState } from 'react';

import './Register.css';
import { inputListRegister } from '../../utils/constants/constants';
import { mainApi } from '../../utils/MainApi/MainApi';
import FormSign from '../../blocks/FormSign/FormSign';

function Register({ logIn }) {

   const [formValue, setFormValue] = useState({
      email: '',
      password: '',
      name: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormValue({
         ...formValue,
         [name]: value
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      mainApi.register(formValue.email, formValue.password, formValue.name,)
         .then(() => {
            setFormValue({
               email: '',
               password: '',
               name: '',
            });
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
         })
         .catch((err) => {
            err.then(({ message }) => console.log(message));
         });
   }

   return (
      <div className='register'>
         <Routes>
            <Route path='/'
               element={
                  <FormSign
                     inputList={inputListRegister}
                     title={'Добро пожаловать!'}
                     nameButtonSubmit={'Зарегистрироваться'}
                     textAfterButton={'Уже зарегистрированы? '}
                     textLink={'Войти'}
                     linkValue={'sign-in'}
                     modific={'register_mod-container'}
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

export default Register;
