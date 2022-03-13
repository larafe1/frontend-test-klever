import * as Yup from 'yup';

export const tokenSchema = Yup.object().shape({
  symbol: Yup.string()
    .max(4, 'Token must have 4 characters or less')
    .required('Token is required'),
  balance: Yup.number()
    .typeError('Balance must be a number')
    .moreThan(0, 'Balance must be greater than 0')
    .required('Balance is required')
});
