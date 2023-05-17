import React, { useState } from 'react';
import { DivContent, Button, Input } from './SearchBarElement'

const SearchBar = ({onSearch}) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
      setId(event.target.value);
  }

   return (
      <DivContent>
         <Input 
            type="search"
            placeholder="Enter character ID"
            onChange={handleChange}
            value={id}
         />
         <Button onClick={()=>{onSearch(id); setId('')}}>Agregar</Button>
      </DivContent>
   );
}

export default SearchBar;