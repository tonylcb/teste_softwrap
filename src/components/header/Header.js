import React from 'react';
import logoSoftwrap from '../../img/logo-softwrap2.png';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
  min-width: 120px;
`;

const H1 = styled.h1`
  font-size: 1.4rem;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  color: #495057;
`;

const H3 = styled.h3`
  font-size: 1.1rem;
`;

const Header = () => {
  return (
    <header className="d-flex align-items-center pt-4 pb-4">
      <div className="col-3 text-center">
        <Logo src={logoSoftwrap} alt="logo softwrap" />
      </div>
      <div className="col-6 text-center">
        <H1>Teste de habilidades - Processo seletivo Softwrap</H1>
        <H2>Formulário de cadastro</H2>
      </div>
      <div className="col-3 text-center">
        <H3>Candidato: Tony Carvalho</H3>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/tonylcb"
            target="_blank"
            rel="noreferrer"
            className="icons px-2"
          >
            <SiGithub title="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/tonylcb/"
            target="_blank"
            rel="noreferrer"
            className="icons px-2"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://wa.me/55081991769976"
            target="_blank"
            rel="noreferrer"
            className="icons px-2"
          >
            <IoLogoWhatsapp title="Whatsapp" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
