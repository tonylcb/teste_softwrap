import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const initialValue = formFields.reduce((acc, field) => {
  return {
    ...acc,
    [field.title]: '',
  };
}, {});

const Form = ({ id }) => {
  const [form, setForm] = useState(id ? null : initialValue);
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/cadastro/${id}`).then((response) => {
        setForm(response.data);
      });
    }
  }, []);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const method = id ? 'put' : 'post';

    const url = id
      ? `http://localhost:5000/cadastro/${id}`
      : `http://localhost:5000/cadastro`;

    axios[method](url, form).then((response) => {
      navigate('/');
    });
  }

  return (
    <div>
      {!form ? (
        <div>Carregando...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {formFields.map(({ id, label }) => (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type="text"
                id={id}
                value={form[id]}
                onChange={handleChange}
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
