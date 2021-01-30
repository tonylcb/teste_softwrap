import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Tabela from './pages/tabela/Tabela';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Form from './components/formulario/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tabela" element={<Tabela />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
