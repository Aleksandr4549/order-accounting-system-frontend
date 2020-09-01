import React, {useRef} from 'react';

import DefaultBtn from '../../Buttons/DefaultBtn/DefaultBtn';
import styles from '../table.module.scss';

const RowTable = ({id, orderNumber, orderDate, companyClient, 
                    contractorFullname, contactNumberTel, 
                    comments, codeATI, onChangeHandler, onClickDelete}) => {

  const orderNumberElem = useRef(null);
  const orderDateElem = useRef(null);
  const companyClientElem = useRef(null);
  const contractorFullnameElem = useRef(null);
  const contactNumberTelElem = useRef(null);
  const commentsElem = useRef(null);
  const codeATIElem = useRef(null);
  
  return (
    <div className={styles.table__row}>
      <div>
        <textarea data-name={'orderNumber'} ref={orderNumberElem} value={orderNumber} 
          onChange={() => onChangeHandler(id, orderNumberElem.current.dataset.name, orderNumberElem.current.value)} />
      </div>
      <div>
        <textarea data-name={'orderDate'} ref={orderDateElem} value={orderDate} 
          onChange={() => onChangeHandler(id, orderDateElem.current.dataset.name, orderDateElem.current.value)} />
      </div>
      <div>
        <textarea data-name={'companyClient'} ref={companyClientElem} value={companyClient} 
          onChange={() => onChangeHandler(id, companyClientElem.current.dataset.name, companyClientElem.current.value)}/>
      </div>
      <div>
        <textarea data-name={'contractorFullname'} ref={contractorFullnameElem} value={contractorFullname} 
          onChange={() => onChangeHandler(id, contractorFullnameElem.current.dataset.name, contractorFullnameElem.current.value)}/>
      </div>
      <div>
        <textarea data-name={'contactNumberTel'} ref={contactNumberTelElem} value={contactNumberTel} 
          onChange={() => onChangeHandler(id, contactNumberTelElem.current.dataset.name, contactNumberTelElem.current.value)}/>
      </div>
      <div>
        <textarea data-name={'comments'} ref={commentsElem} value={comments} 
          onChange={() => onChangeHandler(id, commentsElem.current.dataset.name, commentsElem.current.value)}/>
      </div>
      <div>
        <a href={codeATI} target='_blank' data-name={'codeATI'} ref={codeATIElem}>{codeATI}</a>
      </div>
      <div className={styles.delete__btn__container}>
        <DefaultBtn value='удалить' onClickHandler={() => onClickDelete(id)} />
      </div>
    </div>
  );
};

export default RowTable;
