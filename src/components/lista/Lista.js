import React from 'react';
import Cadastrados from '../cadastrados/Cadastrados';

const Lista = ({ loading, dados }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      {dados.map((dado) => (
        <Cadastrados key={dado.id} dado={dado} />
      ))}
    </div>
  );
};

export default Lista;
