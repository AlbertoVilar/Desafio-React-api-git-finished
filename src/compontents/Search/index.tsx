import React, { useState } from "react";
import "./styels.css";

interface SearchProps {
  onSearchChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchChange }) => {
  const [searchName, setSearchName] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchName(value);
    onSearchChange(value);
    console.log(value);
  }

  return (
    <div>
      <input 
        className="search-profile" 
        name="searchName"
        value={searchName} 
        type="text" 
        placeholder="Usuário Github" 
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
