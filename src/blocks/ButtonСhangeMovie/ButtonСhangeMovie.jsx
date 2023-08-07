import './ButtonСhangeMovie.css';

function ButtonСhangeMovie({ movieIsSaved, location, handleSaveMovie, handleDeleteMovie }) {
   
   return (
      <div className='change-movie'>
         {location.pathname === '/movies'
            ?
            (!movieIsSaved
               ?
               (
                  <button type="button" onClick={() => { handleSaveMovie() }} className={`button hover-link change-movie__button`}>Сохранить</button>
               )
               :
               (
                  <button type="button" onClick={() => { handleDeleteMovie() }} className={`button hover-link change-movie__button change-movie__button_active`}></button>
               )
            )
            :
            (
               <button type="button" onClick={() => { handleDeleteMovie() }} className={`button hover-link change-movie__button change-movie__button_remove`}></button>
            )
         }
      </div >
   );
}

export default ButtonСhangeMovie;