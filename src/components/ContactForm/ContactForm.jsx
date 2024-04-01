import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from "react";
import style from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Must contain only numbers')
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
     addContact(values, { resetForm });
  };

  const nameFieldId = useId();
  const numberFieldId = useId(); 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <span className={style.error}>
            <ErrorMessage name="name" as="span" className={style.error} />
          </span>
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label> 
          <Field type="text" name="number" id={numberFieldId}></Field> 
          <span className={style.error}>
            <ErrorMessage name="number" className={style.error} />
          </span>
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
