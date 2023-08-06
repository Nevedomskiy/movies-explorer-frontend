import './Login.css';
import { inputListLogin } from '../../utils/constants/constants';
import useInput from '../../utils/Validation/Validation';
import FormSign from '../../blocks/FormSign/FormSign';

function Login({ logIn, textServerError }) {

   const email = useInput('', {
      isEmpty: true,
      isEmail: true,
   });

   const password = useInput('', {
      isEmpty: true,
      minLength: 8,
   });

   // const [formValue, setFormValue] = useState({
   //    email: '',
   //    password: '',
   // })

   // const handleChange = (e) => {
   //    const { name, value } = e.target;

   //    setFormValue({
   //       ...formValue,
   //       [name]: value
   //    });
   // }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email.value, password.value);
      if (!email.value || !password.value) {
         return;
      }
      logIn(email.value, password.value);
   }

   return (
      <div className='login'>
         {/* <Routes>
            <Route path='/'
               element={ */}
         <FormSign
            inputList={inputListLogin}
            title={'Рады видеть!'}
            nameButtonSubmit={'Войти'}
            textAfterButton={'Ещё не зарегистрированы? '}
            textLink={'Регистрация'}
            linkValue={'sign-up'}
            email={email}
            password={password}
            textServerError={textServerError}
            // handleChange={handleChange}
            handleSubmit={handleSubmit}
         >
         </FormSign>
         {/* }>
            </Route >

         </Routes > */}

      </div >
   );
}

export default Login;
