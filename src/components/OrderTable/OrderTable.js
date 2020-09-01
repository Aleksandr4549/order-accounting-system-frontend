import React, {useState, useEffect} from 'react';

import {useFetch} from '../../hooks/useFetch';
import HeaderTable from './HeaderTable/HeaderTable';
import RowTable from './RowTable/RowTable';
import OrderModal from '../OrderModal/OrderModal';
import DefaultBtn from '../Buttons/DefaultBtn/DefaultBtn';
import styles from './table.module.scss';

const OrderTable = () => {
  const [state, setState] = useState({
    orders: null, 
    editMode: false, 
    sortByCategory: 'id'
  });

  const [orders, updateFetch] = useFetch('/api/orders', 'get');

  useEffect(() => {
    setState({...state, orders: orders})
  }, [orders])

  useEffect(() => {
    if(state.orders) {
      sortFoo(state.sortByCategory);
    }
  }, [state.sortByCategory, state.orders]);

  const onChangeHandler = (id, fieldName, value) => {
    setState({
      ...state, 
      orders: state.orders.map(order => {
        if(order.id === id) {
          return {...order, [fieldName]: value}
        }
        return order;
      }),
      editMode: true
    });
  };

  const createNewOrder = (data) => {
    updateFetch('/api/orders', 'post', data);

  }

  const onClickSave = () => {
    setState({...state, editMode: false});
    updateFetch('/api/orders', 'put', state.orders);
  };

  const onClickDelete = (id) => {
    updateFetch('/api/orders', 'delete', id);
    setState({...state, orders: state.orders.filter(elem => elem.id !== id)});
  };

  const sortFoo = (categoryName = 'id') => {
    if(state.editMode && categoryName === state.sortByCategory) return;

    if(!isNaN(state.orders[0][categoryName]) && state.orders[0][categoryName] !== '') {
      setState({...state, orders: state.orders.sort((a, b) => {
        return a[categoryName] - b[categoryName]
      })})
    } else if(typeof state.orders[0][categoryName] === 'string') {
      if(categoryName === 'id') {
        setState({...state, orders: state.orders.sort()});
        return;
      }

      setState({...state, orders: state.orders.sort((a, b) => {
        if(a[categoryName].toLowerCase() < b[categoryName].toLowerCase()) {
          return -1;
        }

        if(a[categoryName].toLowerCase() > b[categoryName].toLowerCase()) {
          return 1;
        }

        return 0;
      })})
    } else if(new Date(state.orders[0][categoryName]) instanceof Date) {
      setState({
        ...state, 
        orders: state.orders.sort((a, b) => {
          return new Date(a[categoryName]) - new Date(b[categoryName])
      })})
    }
  };

  const changeSortByCategory = (categoryName) => {
    setState({...state, sortByCategory: categoryName})
  }

  return (
    <div className={styles.table__container}>
      <HeaderTable changeSortByCategory={changeSortByCategory} sortByCategory={state.sortByCategory}  />

      {state.orders && state.orders.map(row => <RowTable key={row.id}
                                    onChangeHandler={onChangeHandler}
                                    id={row.id}
                                    orderNumber={row.orderNumber} 
                                    orderDate={row.orderDate}
                                    companyClient={row.companyClient}
                                    contractorFullname={row.contractorFullname}
                                    contactNumberTel={row.contactNumberTel}
                                    comments={row.comments}
                                    codeATI={row.codeATI}
                                    onClickDelete={onClickDelete} />)}

      <div className={styles.buttons__wrapper}>
        <DefaultBtn value='сохранить' onClickHandler={onClickSave} isDisabled={!state.editMode}/>
        <OrderModal createNewOrder={createNewOrder} />
      </div>
    </div>
  );
};

export default OrderTable;
