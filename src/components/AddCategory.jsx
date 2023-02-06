import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = ( event ) =>{
    event.preventDefault();
    
    //Si no escribre nada
    if( inputValue.trim().length <=1 ) return;

    //Setea la nueva categoria , haciendo un callback de las categorias
    /* setCategories( categories => [inputValue, ...categories ]) */
    onNewCategory( inputValue.trim() );
    //Limpiar el input
    setInputValue('');
    
  }

  return (
    <form onSubmit={ onSubmit} >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
