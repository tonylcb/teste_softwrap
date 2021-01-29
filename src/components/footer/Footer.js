import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Novo cadastro</NavLink>
        </li>
        <li>
          <NavLink to="tabela">Tabela de cadastros</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
