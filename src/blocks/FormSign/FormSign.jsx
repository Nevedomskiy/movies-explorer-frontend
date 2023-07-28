import { Link } from 'react-router-dom';
import ButtonHome from '../ButtonHome/ButtonHome';
import './FormSign.css';

function FormSign({ title, inputList, nameButtonSubmit, textAfterButton, textLink, linkValue, modific }) {
   return (

      <form
         name={'form-sign'}
         className='form-sign'
      >
         <ButtonHome modification={'form-sign__button-home'}></ButtonHome>
         <h1 className='form-sign__title'>{title}</h1>
         <div className={`form-sign__container ${modific}`}>
            <ul className='form-sign__list list'>
               {inputList.map((element) => {
                  console.log(element)
                  return (
                     <li className='form-sign__element'>
                        <label htmlFor={element.type} className='form-sign__description'>{element.description}</label>
                        <input
                           required
                           className='form-sign__input'
                           id={element.type}
                           name={element.type}
                           type={element.type}
                           placeholder={element.description}
                        />
                     </li>
                  );
               })}
            </ul >

            <div className='form-sign__whitespace'></div>

            <div className='form-sign__block-submit' >
               <button
                  type="submit"
                  className="form-sign__button-submit button"
               >
                  {nameButtonSubmit}
               </button>
               <p className='form-sign__text'>{textAfterButton}<Link to={`/${linkValue}`} className="form-sign__link">{textLink}</Link ></p>

            </div>
         </div >
      </form >

   );
}

export default FormSign;