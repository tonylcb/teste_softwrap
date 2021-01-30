import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../utilities/useApi';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
  },
  {
    id: 'idade',
    label: 'Idade',
  },
  {
    id: 'estadoCivil',
    label: 'Estado Civil',
  },
  {
    id: 'cpf',
    label: 'CPF',
  },
  {
    id: 'cidade',
    label: 'Cidade',
  },
  {
    id: 'estado',
    label: 'Estado',
  },
];

const initialValue = {
  nome: '',
  idade: '',
  estadoCivil: '',
  cpf: '',
  cidade: '',
  estado: '',
};

const Form = ({ id }) => {
  const [values, setValues] = useState(id ? null : initialValue);
  let navigate = useNavigate();
  const [loadInfo] = useApi({
    url: `/cadastro/${id}`,
    mathod: 'get',
    onCompleted: (response) => {
      setValues(response.data);
    },
  });

  const [save, setSave] = useApi({
    url: id ? `/cadastro/${id}` : '/cadastro',
    method: id ? 'put' : 'post',
    onCompleted: (response) => {
      if (!response.error) {
        navigate('/');
      }
    },
  });

  useEffect(() => {
    if (id) {
      loadInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function onChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    save({ data: values });
  }
  return (
    <div>
      {!values ? (
        <div>Carregando...</div>
      ) : (
        <form onSubmit={onSubmit}>
          {setSave.loading && <span>Salvando dados...</span>}
          {formFields.map(({ id, label }) => (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type="text"
                id={id}
                name={id}
                value={values[id]}
                onChange={onChange}
              />
            </div>
          ))}
          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
