import React from 'react';
import Formulario from '../../components/formulario/Formulario';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <Formulario id={id ? Number.parseInt(id, 10) : null} />
    </div>
  );
};

export default Home;
