import React from 'react';
import { useFormik } from 'formik';

import {formatDate} from '../../helpers/formatDate';
import styles from './orderForm.module.scss';
 
 const validate = values => {
   const errors = {};

   if (!values.orderNumber) {
    errors.orderNumber = 'Required';
   } 
 
   if (!values.companyClient) {
     errors.companyClient = 'Required';
   } 

   if (!values.contractorFullname) {
    errors.contractorFullname = 'Required';
  } 

  if (!values.contactNumberTel) {
    errors.contactNumberTel = 'Required';
  } 

  if (!values.codeATI) {
    errors.codeATI = 'Required';
  } 

   return errors;
 };
 
 const OrderForm = ({handleSubmitForm, createNewOrder}) => {
   const formik = useFormik({
     initialValues: {
       orderNumber: '',
       companyClient: '',
       contractorFullname: '',
       contactNumberTel: '',
       comments: '',
       codeATI: ''
     },
     validate,
     onSubmit: values => {
       const date = new Date;
       createNewOrder({...values, orderDate: formatDate(date), codeATI: `https://ati.su/firms/${values.codeATI}/info`});
       handleSubmitForm();
     },
   });

   return (
     <form className={styles.form} onSubmit={formik.handleSubmit}>
       <label htmlFor="orderNumber">Номер заявки</label>
       <input
         className={formik.touched.orderNumber && formik.errors.orderNumber ? styles.error : ''}
         id="orderNumber"
         name="orderNumber"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.orderNumber}
       />
       <label htmlFor="companyClient">Компания клиента</label>
       <input
       className={formik.touched.companyClient && formik.errors.companyClient ? styles.error : ''}
         id="companyClient"
         name="companyClient"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.companyClient}
       />
        <label htmlFor="contractorFullname">ФИО</label>
       <input
       className={formik.touched.contractorFullname && formik.errors.contractorFullname ? styles.error : ''}
         id="contractorFullname"
         name="contractorFullname"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.contractorFullname}
       />
        <label htmlFor="contactNumberTel">Контактный телефон</label>
       <input
       className={formik.touched.contactNumberTel && formik.errors.contactNumberTel ? styles.error : ''}
         id="contactNumberTel"
         name="contactNumberTel"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.contactNumberTel}
       />
       <label htmlFor="comments">Комментарии</label>
       <input
       className={formik.touched.comments && formik.errors.comments ? styles.error : ''}
         id="comments"
         name="comments"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.comments}
       />
        <label htmlFor="codeATI">Код ATI</label>
       <input
         className={formik.touched.codeATI && formik.errors.codeATI ? styles.error : ''}
         id="codeATI"
         name="codeATI"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.codeATI}
       />
       <button className={styles.create__btn} type="submit">Создать</button>
     </form>
   );
 };

export default OrderForm;
