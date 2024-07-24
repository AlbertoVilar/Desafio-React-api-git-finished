import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface PrimaryButtonProps {
  buttonText: string;
  searchName?: string; // Tornando searchName opcional
  setError?: React.Dispatch<React.SetStateAction<string>>; // `setError` é opcional
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonText, searchName, setError }) => {
  const navigate = useNavigate();

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (searchName) {
      try {
        const response = await axios.get(`https://api.github.com/users/${searchName}`);
        navigate(`/searcharea/form?searchName=${searchName}`);
        if (setError) setError(''); // Limpar o erro se a busca for bem-sucedida
      } catch (error) {
        if (setError) setError('Erro ao buscar usuário.');
        navigate('/searcharea');
      }
    } else {
      navigate('/searcharea'); // Navegar para '/searcharea' se searchName não estiver definido
    }
  }

  return (
    <div className="primary-button">
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default PrimaryButton;
