import React from "react";

export const GlobalFilter = ({filter, setFilter}) => {
    return (
     <span class = "search">
         Buscar: {'  '}
         <input class="buscador" value={filter || ''}
         onChange={e => setFilter(e.target.value)} />
     </span>
    )
}