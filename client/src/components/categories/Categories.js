const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Negocios', amount: 0, color: incomeColors[0] },
  { type: 'Inverciones', amount: 0, color: incomeColors[1] },
  { type: 'Ingresos Extra', amount: 0, color: incomeColors[2] },
  { type: 'Depositos', amount: 0, color: incomeColors[3] },
  { type: 'Loteria', amount: 0, color: incomeColors[4] },
  { type: 'Gifts', amount: 0, color: incomeColors[5] },
  { type: 'Salario', amount: 0, color: incomeColors[6] },
  { type: 'Renta', amount: 0, color: incomeColors[7] },
  { type: 'Otros', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Cuentas', amount: 0, color: expenseColors[0] },
  { type: 'Auto', amount: 0, color: expenseColors[1] },
  { type: 'Ropa', amount: 0, color: expenseColors[2] },
  { type: 'Viaje', amount: 0, color: expenseColors[3] },
  { type: 'Comida', amount: 0, color: expenseColors[4] },
  { type: 'Ventas', amount: 0, color: expenseColors[5] },
  { type: 'Casa', amount: 0, color: expenseColors[6] },
  { type: 'Entretenimiento', amount: 0, color: expenseColors[7] },
  { type: 'Telefono', amount: 0, color: expenseColors[8] },
  { type: 'Mascotas', amount: 0, color: expenseColors[9] },
  { type: 'Otros', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};