import React from 'react';

import styles from '../buttons.module.scss';

const DefaultBtn = ({value, onClickHandler, isDisabled = false}) => {
  return <button className={styles.default__btn} onClick={onClickHandler} disabled={isDisabled}>{value}</button>
};

export default DefaultBtn;
