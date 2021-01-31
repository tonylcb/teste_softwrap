import React, { useEffect, useState, useRef } from 'react';
import Lista from '../lista/Lista';
import useApi from '../utilities/useApi';

const Search = () => {
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useApi({
    debounceDelay: 300,
    url: '/cadastro',
    method: 'get',
    params: { nome_like: search || undefined },
  });

  useEffect(() => {
    load({ debounced: mountRef.current });

    if (!mountRef.current) {
      mountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Lista
        dados={setLoad.data}
        loading={setLoad.loading}
        error={setLoad.error}
      />
    </div>
  );
};

export default Search;
