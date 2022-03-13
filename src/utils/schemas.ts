import * as Yup from 'yup';

export const tokenSchema = Yup.object().shape({
  symbol: Yup.string()
    .max(4, 'Must be 4 characters or less')
    .required('Token symbol is required'),
  balance: Yup.number()
    .moreThan(0, 'Balance must be greater than 0')
    .required('Token balance is required')
});
