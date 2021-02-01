import React, { useEffect, useState, useRef } from 'react';
import Lista from '../lista/Lista';
import useApi from '../utilities/useApi';
import InfiniteScroll from '../infiniteScroll/InfiniteScroll';

const baseParams = {
  _limit: 10,
  _sort: 'id',
  _order: 'desc',
};

const Search = () => {
  const [page, setPage] = useState(1);
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useApi({
    debounceDelay: 300,
    url: '/cadastro',
    method: 'get',
  });

  useEffect(() => {
    load({
      debounced: mountRef.current,
      params: { ...baseParams, _page: 1, nome_like: search || undefined },
    });

    if (!mountRef.current) {
      mountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function fetchMore() {
    const newPage = page + 1;
    load({
      isFetchMore: true,
      params: { ...baseParams, _page: newPage, nome_like: search || undefined },
      updateRequestInfo: (newRequestInfo, prevRequestInfo) => ({
        ...newRequestInfo,
        data: [...prevRequestInfo.data, ...newRequestInfo.data],
      }),
    });
    setPage(newPage);
  }
  const ContainerLista = {
    height: '326px',
    overflowY: 'scroll',
    border: '1px solid #e9ecef',
  };

  return (
    <div className="animeRight">
      <input
        className="form-control mb-2 shadow"
        type="search"
        placeholder="Buscar por nome"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <div style={ContainerLista}>
        <Lista
          dados={setLoad.data}
          loading={setLoad.loading}
          error={setLoad.error}
          refetch={() => {
            load({ params: baseParams });
          }}
        />
        {setLoad.data &&
          !setLoad.loading &&
          setLoad.data?.length < setLoad.total && (
            <InfiniteScroll fetchMore={fetchMore} />
          )}
      </div>
    </div>
  );
};

export default Search;
