import * as yup from 'yup';

export default yup.object().shape({
  nome: yup.string(),
  idade: yup.number('Insira números!'),
  estadoCivil: yup.string(),
  cpf: yup.number('Insira números!'),
  cidade: yup.string(),
  estado: yup.string(),
});
