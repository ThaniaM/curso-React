import React from 'react';
import './TodoSearch.css'

function TodoSearch({
  searchValue,setSearchValue, 
}){
  /* recibir la propiedadd searchvalue */
  

  return(
    <input 
    placeholder="Cortar cebolla"  
    className="TodoSearch"
    value={searchValue} /*  valor del estado conectado*/
    onChange={(event)=>{
      setSearchValue(event.target.value);/* guardar la informacion que escriben los usuarios en el input en el estado y mostrarlo en el input de busqueda */
    }}
    />
  );
}

export { TodoSearch};
/* hacer el export nombrados */