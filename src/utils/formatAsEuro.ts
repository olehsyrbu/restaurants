export const formatAsEuro = (amount: number) => {
  return new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};
