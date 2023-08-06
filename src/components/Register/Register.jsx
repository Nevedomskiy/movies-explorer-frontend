import './Register.css';
import { inputListRegister } from '../../utils/constants/constants';
import FormSign from '../../blocks/FormSign/FormSign';
import useInput from '../../utils/Validation/Validation';

function Register({ register, setTextServerError, textServerError }) {

   const email = useInput('', {
      isEmpty: true,
      isEmail: true,
   });

   const password = useInput('', {
      isEmpty: true,
      minLength: 8,
   });

   const name = useInput('', {
      isEmpty: true,
      minLength: 2,
      maxLength: 30,
      isName: true,
   });

   // const [formValue, setFormValue] = useState({
   //    email: '',
   //    password: '',
   //    name: ''
   // });

   // const handleChange = (e) => {
   //    const { name, value } = e.target;

   //    setFormValue({
   //       ...formValue,
   //       [name]: value
   //    });
   // }

   const handleSubmit = (e) => {
      e.preventDefault();
      register(email.value, password.value, name.value);

   }

   return (
      <div className='register'>
         {/* <Routes>
            <Route path='/'
               element={ */}
         <FormSign
            inputList={inputListRegister}
            title={'Добро пожаловать!'}
            nameButtonSubmit={'Зарегистрироваться'}
            textAfterButton={'Уже зарегистрированы? '}
            textLink={'Войти'}
            linkValue={'sign-in'}
            modific={'register_mod-container'}
            // handleChange={handleChange}
            handleSubmit={handleSubmit}
            setTextServerError={setTextServerError}
            email={email}
            password={password}
            name={name}
            textServerError={textServerError}
         >
         </FormSign>
         {/* }>
            </Route >

         </Routes > */}

      </div >
   );
}

export default Register;
