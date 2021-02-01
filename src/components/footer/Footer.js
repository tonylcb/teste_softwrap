import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ButtonNav = styled.button`
  background-color: transparent;
  border: 1px solid #2f5ef7;
  border-radius: ${(props) => props.borderRadius || '0px 100px 100px 0px'};
  color: #2f5ef7;
  padding: 15px 40px;
  min-width: 200px;
  font-size: 1.1rem;
  transition: 0.25s ease;
  cursor: pointer;
  background-color: unset;
  text-decoration: none;

  &:hover {
    background-color: #2f5ef7;
    transform-origin: left;
    color: white;
  }
`;

const Footer = () => {
  return (
    <nav className="m-2">
      <ul className="d-flex justify-content-center p-0">
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
          <ButtonNav borderRadius="100px 0px 0px 100px">
            Novo cadastro
          </ButtonNav>
        </NavLink>
        <NavLink
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/lista"
        >
          <ButtonNav>Lista</ButtonNav>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Footer;
