import React from 'react';
import Cadastrados from '../cadastrados/Cadastrados';

const Lista = ({ loading, dados, error }) => {
  if (error) {
    return <div>Erro</div>;
  }
  if (loading || dados === null) {
    return <div>Carregando...</div>;
  }
  if (dados.length === 0) {
    return <div>Nenhum resultado encontrado...</div>;
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
