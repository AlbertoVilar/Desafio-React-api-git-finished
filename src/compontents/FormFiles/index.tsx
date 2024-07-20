import React from 'react';
import { FormData } from '../../routes/Home/Form'; // Corrigido o caminho da importação
import './styeles.css'

interface FormFilesProps {
  formData: FormData;
}

const FormFiles: React.FC<FormFilesProps> = ({ formData }) => {
  return (
    <section className="container-form">
      <form>
        <h2>Informações</h2>
        <div>
          <input 
            type="url" 
            id="perfil" 
            value={formData.html_url} 
            name="perfil" 
            placeholder="Perfil:" 
            readOnly
          />
        </div>
        <div>
          <input 
            type="number" 
            id="seguidores" 
            value={formData.followers_number} 
            name="followers_number" 
            placeholder="Número de Seguidores:" 
            readOnly
          />
        </div>
        <div>
          <input 
            type="text" 
            id="localidade" 
            value={formData.locality} 
            name="localidade" 
            placeholder="Localidade:" 
            readOnly
          />
        </div>
        <div>
          <input 
            type="text" 
            id="nome" 
            value={formData.name} 
            name="nome"
            placeholder="Nome:"
            readOnly
          />
        </div>
      </form>
    </section>
  );
}

export default FormFiles;
