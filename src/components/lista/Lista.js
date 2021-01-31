import React from 'react';
import Cadastrados from '../cadastrados/Cadastrados';
import useApi from '../utilities/useApi';

const Lista = ({ loading, dados, error, refetch }) => {
  const [deleteCadastro, setDeleteCadastro] = useApi({
    method: 'DELETE',
  });
  if (error) {
    return <div>Erro</div>;
  }
  if (dados === null || setDeleteCadastro.loading) {
    return <div>Carregando...</div>;
  }
  if (dados.length === 0) {
    return <div>Nenhum cadastro encontrado.</div>;
  }

  return (
    <div>
      {dados.map((dado) => (
        <Cadastrados
          key={dado.id}
          dado={dado}
          onClickDelete={async () => {
            await deleteCadastro({ url: `/cadastro/${dado.id}` });
            refetch();
          }}
        />
      ))}
      {loading && <div>Carregando mais cadastros...</div>}
    </div>
  );
};

export default Lista;
