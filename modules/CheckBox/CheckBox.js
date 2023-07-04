import React from 'react';
import s from './CheckBox.module.scss';

const CheckBox = ({ id, children }) => {
  return (
    <>
      <label className={s.container}>
        <input type='checkbox' />
        <span className={s.checkmark}></span>
        <span className={s.title}>{children}</span>
      </label>
    </>
  );
};

export default CheckBox;
