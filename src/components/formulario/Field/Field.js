import React from 'react';
import { useField } from 'formik';

const Field = ({ name, id, label, ...restProps }) => {
  const [field, meta] = useField({ name, id, ...restProps });

  return (
    <>
      {label && <label htmlFor={id ?? name}>{label}</label>}
      <input {...field} name={name} id={id ?? name} />
      {meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default Field;
