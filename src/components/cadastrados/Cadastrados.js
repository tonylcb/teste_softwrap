import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiEdit3 } from 'react-icons/fi';
import styled from 'styled-components';

const Icons = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;
const Tabela = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const ButtonList = styled.button`
  background-color: ${(props) => props.backgroundColor || '#2f5ef7'};
  border: 0px;
  border-radius: 10px;
  color: white;
  padding: 1px 8px 4px 8px;
  font-size: 1rem;
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#00B7F8'};
  }
`;

const Dado = styled.li`
  font-size: 0.8rem;
`;

const Cadastrados = ({ dado, onClickDelete }) => {
  return (
    <div className="mb-3">
      <Tabela className="card shadow-sm">
        <Icons>
          <Link to={`/edit/${dado.id}`}>
            <ButtonList type="button">
              <FiEdit3 />
            </ButtonList>
          </Link>
          <div>
            <ButtonList
              className="m-1"
              backgroundColor="#dc523c"
              hoverBgColor="#ff7a64"
              type="button"
              onClick={onClickDelete}
            >
              <HiOutlineTrash />
            </ButtonList>
          </div>
        </Icons>

        <ul className="list-group list-group-flush w-100 border">
          <Dado className="list-group-item">
            <strong>Nome:</strong> {dado.nome}
          </Dado>
          <Dado className="list-group-item">
            <strong>Idade:</strong> {dado.idade}
          </Dado>
          <Dado className="list-group-item">
            <strong>Estado civil:</strong> {dado.estadoCivil}
          </Dado>
        </ul>
        <ul className="list-group list-group-flush w-100 border ">
          <Dado className="list-group-item">
            <strong>CPF:</strong> {dado.cpf}
          </Dado>
          <Dado className="list-group-item">
            <strong>Cidade:</strong> {dado.cidade}
          </Dado>
          <Dado className="list-group-item">
            <strong>Estado:</strong> {dado.estado}
          </Dado>
        </ul>
      </Tabela>
    </div>
  );
};

export default Cadastrados;
