import React, {useRef} from 'react';

import styles from '../table.module.scss';

const HeaderTable = ({changeSortByCategory, sortByCategory}) => {
  const orderNumberElem = useRef(null);
  const orderDataElem = useRef(null);
  const companyClientElem = useRef(null);
  const contractorFullnameElem = useRef(null);
  const contactNumberTelElem = useRef(null);
  const commentsElem = useRef(null);
  const codeATIElem = useRef(null);

  return (
    <div className={styles.table__header}>
      <div className={styles.header__item}>
        <div>Номер заявки </div>
        <div className={styles.icon__container} 
              data-name='orderNumber' 
              ref={orderNumberElem} 
              onClick={() => changeSortByCategory(orderNumberElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'orderNumber' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>

      <div className={styles.header__item}>
        <div>Дата заявки</div>
        <div className={styles.icon__container} 
              data-name='orderDate' 
              ref={orderDataElem} 
              onClick={() => changeSortByCategory(orderDataElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'orderDate' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>

      <div className={styles.header__item}>
        <div>Наименование компании</div>
        <div className={styles.icon__container} 
              data-name='companyClient' 
              ref={companyClientElem} 
              onClick={() => changeSortByCategory(companyClientElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'companyClient' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>

      <div className={styles.header__item}>
          <div>ФИО</div>
          <div className={styles.icon__container} 
              data-name='contractorFullname' 
              ref={contractorFullnameElem} 
              onClick={() => changeSortByCategory(contractorFullnameElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'contractorFullname' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>

      <div className={styles.header__item}>
        <div>Контактный телефон</div>
        <div className={styles.icon__container} 
              data-name='contactNumberTel' 
              ref={contactNumberTelElem} 
              onClick={() => changeSortByCategory(contactNumberTelElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'contactNumberTel' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>
      <div className={styles.header__item}>
        <div>Комментарии</div>
        <div className={styles.icon__container} 
              data-name='comments' 
              ref={commentsElem} 
              onClick={() => changeSortByCategory(commentsElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'comments' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>

      <div className={styles.header__item}>
        <div>Код ATI</div>
        <div className={styles.icon__container} 
              data-name='codeATI' 
              ref={codeATIElem} 
              onClick={() => changeSortByCategory(codeATIElem.current.dataset.name)}>
          <svg
            className={sortByCategory === 'codeATI' ? styles.arrow__icon__active : styles.arrow__icon}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderTable;
