import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {ValidationSchema } from '../../Validation/ValidationSchema';

export const SignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
    
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
      validationSchema={Yup.object(ValidationSchema)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Ad</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Soyad</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="email">Email Adresi</label>
          <input id="email" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.nuk && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}

          <button type="submit" disabled={!formik.dirty || formik.isSubmitting}>
            Kaydol
          </button>
        </form>
      )}
    </Formik>
  );
};
