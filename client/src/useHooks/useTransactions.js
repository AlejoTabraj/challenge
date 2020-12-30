import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';

import { incomeCategories, expenseCategories, resetCategories } from '../components/categories/Categories';

const useTransactions = (title) => {
  console.log('total', title)
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  console.log('trns', transactions)
  const rightTransactions = transactions.filter((t) => t[0].type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal[0].amount, 0);
  console.log('totalisimo', rightTransactions)
  const categories = title === 'Ingresos' ? incomeCategories : expenseCategories;
  console.log('categories', categories)

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t[0].category);

    if (category) category.amount += t[0].amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);
  console.log('fil',filteredCategories)

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;