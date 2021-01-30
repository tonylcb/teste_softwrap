import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lista from '../lista/Lista';

const Search = () => {
  const [search, setSearch] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const params = {};

    if (search) {
      params.nome_like = search;
    }
    axios.get('http://localhost:5000/cadastro', { params }).then((response) => {
      setLista(response.data);
    });
  }, [search]);
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Lista dados={lista} loading={!lista.length} />
    </div>
  );
};

export default Search;
