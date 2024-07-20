
// Welcome.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../compontents/Header/PrimaryButton';

const Welcome: React.FC = () => {
  return (
    <section className="section-area-model">
      <h1>Bem-vindo à Página Inicial</h1>
      <Link to="/searcharea">
        <PrimaryButton buttonText="Começar" searchName="" />
      </Link>
    </section>
  );
}

export default Welcome;

