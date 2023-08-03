import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Register.css';
import { inputListRegister } from '../../utils/constants/constants';
import { mainApi } from '../../utils/MainApi/MainApi';
import FormSign from '../../blocks/FormSign/FormSign';

function Register() {


   const navigate = useNavigate();

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
            navigate('/sign-in', { replace: true });
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
