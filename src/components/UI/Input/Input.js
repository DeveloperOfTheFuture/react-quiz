import React from "react";

import './Input.scss';

function isInvalid({valid, touched, shouldValidation}) {
  return !valid && shouldValidation && touched;
}

const Input = props => {
  const cls = ["Input"];
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push('invalid');
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange}/>

      {isInvalid(props) ? <small>{props.errorMessage || 'Заполните пустое поле'}</small> : null}
    </div>
  )
}

export default Input;