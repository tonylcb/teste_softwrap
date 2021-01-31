import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiEdit3 } from 'react-icons/fi';

const Cadastrados = ({ dado, onClickDelete }) => {
  return (
    <div>
      <p>{dado.nome}</p>
      <p>{dado.idade}</p>
      <p>{dado.estadoCivil}</p>
      <p>{dado.cpf}</p>
      <p>{dado.cidade}</p>
      <p>{dado.estado}</p>
      <Link to={`/edit/${dado.id}`}>
        <button type="button">
          <FiEdit3 />
        </button>
      </Link>
      <button type="button" onClick={onClickDelete}>
        <HiOutlineTrash />
      </button>
    </div>
  );
};

export default Cadastrados;
