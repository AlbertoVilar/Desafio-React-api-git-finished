// PrimaryButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface PrimaryButtonProps {
  searchName: string;
  buttonText: string;
  setError?: React.Dispatch<React.SetStateAction<string>>; // `setError` é opcional
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ searchName, buttonText, setError }) => {
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
      }
    } else {
      navigate('/searcharea');
    }
  }

  return (
    <div className="primary-button">
      <button onClick={handleClick}>{'Começar'}</button>
    </div>
  );
}

export default PrimaryButton;
