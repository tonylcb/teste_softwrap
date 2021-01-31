import * as yup from 'yup';

export default yup.object().shape({
  nome: yup.string(),
  idade: yup.number(),
  estadoCivil: yup.string(),
  cpf: yup.number().required('Preencha um CPF válido.'),
  cidade: yup.string(),
  estado: yup.string(),
});
