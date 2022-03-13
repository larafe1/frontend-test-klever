export const formatCurrency = (value: string) => {
  return Intl.NumberFormat('en-US').format(+value);
};
