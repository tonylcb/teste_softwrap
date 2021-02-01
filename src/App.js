import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Tabela from './pages/tabela/Tabela';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import GlobalStyle from './GlobalStyle';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Tabela />} />
          <Route path="/edit/:id" element={<Home />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
