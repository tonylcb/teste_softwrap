import React from 'react';
import logoSoftwrap from '../../img/logo-softwrap.png';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const Header = () => {
  return (
    <header className="row">
      <div className="col-sm">
        <img src={logoSoftwrap} alt="logo softwrap" />
      </div>
      <div className="col-sm">
        <h1>Teste de habilidades - Processo seletivo Softwrap</h1>
        <h2>Formulário de cadastro</h2>
      </div>
      <div className="col-sm">
        <h3>Candidato: Tony Carvalho</h3>
        <div></div>
        <SiGithub />
        <SiLinkedin />
        <IoLogoWhatsapp />
      </div>
    </header>
  );
};

export default Header;
