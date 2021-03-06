import logo from './logo.svg';
import Global from './styles/global';
import Header from './components/header/Header';
import Summary from './components/Summary/Summary';
import Form from './components/Form/Form';
import List from './components/List/List';
import React, { useState, useEffect } from "react";

function App() {

  const data = localStorage.getItem("transactions");

  const [transactions, setTransactions] =useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const expenseAmount = transactions.filter((item) => item.isExpense).map((transaction) => Number(transaction.amount));



    const incomeAmount = transactions.filter((item) => !item.isExpense).map((transaction) => Number(transaction.amount));

    const expenses = expenseAmount.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const incomes = incomeAmount.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(incomes - expenses).toFixed(2);


    console.log("income to be setted is: " + incomes)
    console.log("expenses to be setted is " + expenses);

    setIncome(`R$ ${incomes}`);
    setExpense(`R$ ${expenses}`);
    //console.log("expense: " + expenseAmount);
    //console.log("income " + income);
    setTotal(`${Number(incomes) < Number(expenses) ? "-" : ""}USD$ ${total}`);

  }, [transactions]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactions, transaction];

    setTransactions(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    
  }


  return (

    <>
      <div className="App">
        <Header/>
        <Summary income={income} expense={expense} total={total}/>
        <Form handleAdd={handleAdd}/>
        <List items={transactions} setItems={setTransactions}/>
      </div>
    </>
    
  );
}

export default App;
