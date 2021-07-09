import * as Yup from 'yup';
export const ValidationSchema = {
  firstName: Yup.string().min(2, 'En az iki karakter olmali').required(),
  lastName: Yup.string().min(2, 'En az iki karakter olmali').required(),
  email: Yup.string().email('Invalid email address').required('Required'),
  agree: Yup.bool().oneOf([true], 'Koşulları kabul etmelisiniz'),
  password: Yup.string().required('Required'),
};

export const ValidationSchema2 = {
  firstName: Yup.string().min(2, 'En az iki karakter olmali').required(),
  lastName: Yup.string().min(2, 'En az iki karakter olmali').required(),
  email: Yup.string().email('Invalid email address').required('Required'),
  agree: Yup.bool().oneOf([true], 'Koşulları kabul etmelisiniz'),
};
