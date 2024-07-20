import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AvatarComponent from '../../../compontents/AvatarComponent';
import FormFiles from '../../../compontents/FormFiles';
import './styels.css'


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export type FormData = {
  avatar_url: string;
  html_url: string;
  followers_number: number;
  locality: string;
  name: string;
};

const Form: React.FC = () => {
  const query = useQuery();
  const searchName = query.get('searchName') || '';

  const [formData, setFormData] = useState<FormData>({
    avatar_url: '',
    html_url: '',
    followers_number: 0,
    locality: '',
    name: ''
  });

  useEffect(() => {
    if (searchName) {
      axios.get(`https://api.github.com/users/${searchName}`)
        .then(response => {
          const data = response.data;
          setFormData({
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            followers_number: data.followers,
            locality: data.location || 'Localidade não disponível',
            name: data.name || 'Nome não disponível'
          });
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }
  }, [searchName]);

  return (
    <section className="section-area-model details-section">
      <div className="form-container">
        <AvatarComponent avatarUrl={formData.avatar_url} />
        <FormFiles formData={formData} />
      </div>
    </section>
  );
}

export default Form;
