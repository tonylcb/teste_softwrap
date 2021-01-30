import React, { useEffect, useState } from 'react';
import Lista from '../lista/Lista';
import useApi from '../utilities/useApi';

const Search = () => {
  const [search, setSearch] = useState('');
  const [load, setLoad] = useApi({
    url: '/cadastro',
    method: 'get',
    params: { nome_like: search || undefined },
  });

  useEffect(() => {
    load();
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
