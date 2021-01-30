import React from 'react';
import { Link } from 'react-router-dom';

const Cadastrados = ({ dado }) => {
  return (
    <div>
      <p>{dado.nome}</p>
      <p>{dado.idade}</p>
      <p>{dado.estadoCivil}</p>
      <p>{dado.cpf}</p>
      <p>{dado.cidade}</p>
      <p>{dado.estado}</p>
      <Link to={`/edit/${dado.id}`}>Editar</Link>
      <button>Excluir</button>
    </div>
  );
};

export default Cadastrados;
