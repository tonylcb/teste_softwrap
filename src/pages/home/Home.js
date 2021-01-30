import React from 'react';
import Form from '../../components/formulario/Form';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <Form id={id ? Number.parseInt(id, 10) : null} />
    </div>
  );
};

export default Home;
