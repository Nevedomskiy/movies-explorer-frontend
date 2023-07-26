import { Link } from 'react-router-dom';
import ButtonHome from '../ButtonHome/ButtonHome';
import './FormSign.css';

function FormSign({ title, inputList, nameButtonSubmit, textAfterButton, textLink, linkValue, modific }) {
   return (

      <form
         name={'form-sign'}
         className='form-sign'
         noValidate
      >
         <ButtonHome modification={'form-sign-button-home'}></ButtonHome>
         <h1 className='form-sign-title'>{title}</h1>
         <div className={`form-sign-container ${modific}`}>
            <ul className='form-sign-inputs-list list'>
               {inputList.map((element) => {
                  return (
                     <li className='form-sign-inputs-element'>
                        <p className='form-sign-input-description'>{element.text}</p>
                        <input
                           required
                           className='form-sign-input'
                           id={element.value}
                           name={element.value}
                           type={element.value}
                        />
                     </li>
                  );
               })}
            </ul >

            <div className='form-sign-whitespace'></div>

            <div className='form-sign-block-submit' >
               <button
                  type="submit"
                  className="form-sign-submit-btn button"
               >
                  {nameButtonSubmit}
               </button>
               <p className='form-sign-block-submit__text'>{textAfterButton}<Link to={`/${linkValue}`} className="form-sign-block-submit__text_link">{textLink}</Link ></p>

            </div>
         </div >
      </form >

   );
}

export default FormSign;