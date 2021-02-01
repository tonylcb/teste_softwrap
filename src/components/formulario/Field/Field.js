import React from 'react';
import { useField } from 'formik';

const Field = ({ name, id, label, ...restProps }) => {
  const [field, meta] = useField({ name, id, ...restProps });

  return (
    <div className="py-2">
      {label && <label htmlFor={id ?? name}>{label}</label>}
      <input className="form-control" {...field} name={name} id={id ?? name} />
      {meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export default Field;
