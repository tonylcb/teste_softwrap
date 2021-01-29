import React, { useState } from 'react';
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

const Form = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  let navigate = useNavigate();

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/cadastro', form).then((response) => {
      navigate('/');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type="text" id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default Form;
