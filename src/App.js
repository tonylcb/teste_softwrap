import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Form from './components/formulario/Form';
import Tabela from './pages/tabela/Tabela';
import Footer from './components/footer/Footer';
import Cadastrados from './components/cadastrados/Cadastrados';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="tabela" element={<Tabela />} />
          <Route path="tabela/:id" element={<Cadastrados />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
