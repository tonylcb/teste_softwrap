import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../utilities/useApi';
import Field from './Field/Field';
import { Formik, Form } from 'formik';
import schema from './schema';

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

const Formulario = ({ id }) => {
  let navigate = useNavigate();
  const [load, loadInfo] = useApi({
    url: `/cadastro/${id}`,
    method: 'get',
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
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function onSubmit(formValues) {
    save({ data: formValues });
  }

  const values = id ? loadInfo.data : initialValue;
  return (
    <div>
      {!values ? (
        <div>Carregando...</div>
      ) : (
        <Formik
          initialValues={values}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {() => (
            <Form>
              {setSave.loading && <span>Salvando dados...</span>}
              {formFields.map(({ id, label }) => (
                <div key={id}>
                  <Field type="text" name={id} label={id} />
                </div>
              ))}
              <button type="submit">Salvar</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Formulario;
