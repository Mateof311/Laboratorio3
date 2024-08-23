import './App.css'
import Table from './components/Table';
const netIncomes = [{brand: 'McDonalds', income: 1291283}, {brand: 'Burger King', income: 1927361}, {brand: 'KFC', income: 1098463}];

function App() {
  //average income
  const incomes= netIncomes.map(company => company.income);
  const incomeSum= incomes.reduce((acc, company) => acc + company, 0);
  const average = (incomeSum / incomes.length).toFixed(0);
  return (
    <div>
      <h3>Ingresos Brutos</h3>
      <Table netIncomes={netIncomes}/>
      <p>Promedio de ingreso neto entre todas las compañias: ${average}</p>
    </div>
    
  );
}

export default App;
