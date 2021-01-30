import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../components/formulario/Form';

const Home = () => {
  const { id } = useParams;
  return (
    <div>
      <Form id={id ? Number.parseInt(id, 10) : null} />
    </div>
  );
};

export default Home;
