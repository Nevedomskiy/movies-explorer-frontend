import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { mainApi } from '../../utils/MainApi/MainApi';
import './Login.css';
import { inputListLogin } from '../../utils/constants/constants';

import FormSign from '../../blocks/FormSign/FormSign';

function Login({ setLoggedIn }) {
   const navigate = useNavigate();

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
      mainApi.authorize(formValue.email, formValue.password)
         .then((res) => {
            console.log(res);
            setFormValue({
               email: '',
               password: '',
            });
            setLoggedIn(true);
            navigate('/movies', { replace: true });
         }
         )
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
