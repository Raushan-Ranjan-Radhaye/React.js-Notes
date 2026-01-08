import React from 'react'
import { useState, useRef } from 'react'

function ExpenseForm({onAddExpense}) {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const titleRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert("Please fill all fields with valid data");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    titleRef.current.focus();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input placeholder="Expense Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} ref={titleRef} />
      <input placeholder="Amount ₹" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
