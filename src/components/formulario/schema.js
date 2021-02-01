import * as yup from 'yup';

export default yup.object().shape({
  nome: yup.string(),
  idade: yup.number(),
  estadoCivil: yup.string(),
  cpf: yup.number(),
  cidade: yup.string(),
  estado: yup.string(),
});
