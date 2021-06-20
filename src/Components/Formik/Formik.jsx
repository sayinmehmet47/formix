import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

export const Form = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', agree: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, 'En az iki karakter olmali')
            .required('Required'),
          lastName: Yup.string()
            .min(2, 'En az iki karakter olmali')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          agree: Yup.bool()
            .oneOf([true], 'Koşulları kabul etmelisiniz')
            .required('kasullari kabul etmelisiniz'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
            {/* phone number */}
            <div className="checkbox topMargin">
              <input
                id="agree"
                type="checkbox"
                value={formik.values.agree}
                onChange={formik.handleChange}
              />
              <label htmlFor="agree" className="checkbox-label">
                Sözleşmeyi okudum kabul ediyorum.
              </label>
            </div>
            {formik.errors.agree && (
              <div style={{ color: 'red' }} className="input-feedback">
                {formik.errors.agree}
              </div>
            )}

            <button
              type="submit"
              disabled={!formik.dirty || formik.isSubmitting}
            >
              Kaydol
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
