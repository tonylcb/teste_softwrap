import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Cadastrados = ({ dados }) => {
  const { id } = useParams();

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.estadoCivil}</p>
      <p>{dados.cpf}</p>
      <p>{dados.cidade}</p>
      <p>{dados.estado}</p>
      <Link to={`tabela/${id}`}>
        <button>Editar</button>
      </Link>
      <button>Excluir</button>
    </div>
  );
};

export default Cadastrados;
