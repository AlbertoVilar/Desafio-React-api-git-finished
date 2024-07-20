import React, { useState } from 'react';
import "./styels.css";
import PrimaryButton from "../../../compontents/Header/PrimaryButton";
import Search from "../../../compontents/Search";
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SearchArea: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [error, setError] = useState<string>('');
  
    function handleSearchChange(value: string) {
      setSearchTerm(value);
      setError(''); // Limpar o erro quando o valor muda
    }
  
    return (
      <>
         <section className="section-area-model area-styles-search">
        <Search onSearchChange={handleSearchChange} />
        <PrimaryButton searchName={searchTerm} buttonText="Buscar" setError={setError} />
        {error && <h2 className="error-message">{error}</h2>}
        <div className="navigation-container">
          <Link to="/" className="navigate-button">Voltar para a Página Inicial</Link>
        </div>
        
      </section>
      <Outlet /> {/* Aqui o Outlet renderiza o Form */}
      </>
     
    );
  }
  
  export default SearchArea;