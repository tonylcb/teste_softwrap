import React from 'react';
import Cadastrados from '../cadastrados/Cadastrados';

const Lista = ({ loading, lista }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      {lista.map((dados) => (
        <Cadastrados key={dados.id} dados={dados} />
      ))}
      ;
    </div>
  );
};

export default Lista;
