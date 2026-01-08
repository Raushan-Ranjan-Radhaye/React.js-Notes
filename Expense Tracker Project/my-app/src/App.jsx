import React, { useEffect } from 'react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(()=>{
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses))// iska help se hm local storge me ham value ko saved kar te hai 
    //  jo ki refresh hone par hate ga nahi app me ho=i rahega
  },[expenses])



  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter(exp => exp.id !== id))
  }

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
      <div className="app-container">
        <h1>💰 Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <h3 className="total">Total Expense: ₹{total.toFixed(2)}</h3>
        <ExpenseList expenses={expenses} onDelete={deleteExpense}/>
      </div>
  )
}

export default App
