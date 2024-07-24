
// Welcome.tsx
import React from 'react';
;
import PrimaryButton from '../../../compontents/Header/PrimaryButton'; // Corrigido o caminho para 'components'

const Welcome: React.FC = () => {
  return (
    <section className="section-area-model">
      <h1>Bem-vindo à Página Inicial</h1>
      <PrimaryButton buttonText="Começar" searchName="" />
    </section>
  );
}

export default Welcome;
