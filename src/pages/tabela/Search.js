import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lista from '../../components/lista/Lista';

const Search = ({ loading }) => {
  const [search, setSearch] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    let params = {};

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
      <Lista lista={lista} loading={!lista.length} />
    </div>
  );
};

export default Search;
