import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../utilities/useApi';
import Field from './Field/Field';
import { Formik, Form } from 'formik';
import schema from './schema';
import styled from 'styled-components';

const ButtonSubmit = styled.button`
  background-color: #dc523c;
  border-radius: 100px;
  padding: 8px 10px;
  color: white;
  border: none;
  min-width: 200px;
  font-size: 1.1rem;
  margin: 0 auto;
  transition: 0.25s ease;
  &:hover {
    background-color: #ff7a64;
    transform-origin: left;
  }
`;

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

  const fundoForm = {
    backgroundColor: 'white',
    borderRadius: '10px',
  };

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
            <Form
              className="shadow p-3 mb-5 bg-white rounded"
              style={fundoForm}
            >
              {setSave.loading && <span>Salvando dados...</span>}
              <div className="d-flex justify-content-center">
                <div className="row mx-md-n5 px-2">
                  <Field type="text" name="nome" label="Nome" />
                  <Field type="number" name="idade" label="Idade" />
                  <Field type="text" name="estadoCivil" label="Estado civil" />
                </div>
                <div className="row mx-md-n5 px-2">
                  <Field type="number" name="cpf" label="CPF" />
                  <Field type="text" name="cidade" label="Cidade" />
                  <Field type="text" name="estado" label="Estado" />
                </div>
              </div>
              <ButtonSubmit
                className="d-flex justify-content-center shadow-sm mt-4 w-25"
                type="submit"
              >
                Salvar
              </ButtonSubmit>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Formulario;
