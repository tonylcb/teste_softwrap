import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Novo cadastro</Link>
        </li>
        <li>
          <Link to="/tabela">Tabela de cadastros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
