import {useState} from 'react'

function Todo() {

    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])


    const handleSubmit = (e) =>{
        e.preventDefault(); // ye page ko refresh hone se rok ta hai
        if(newTodo.trim()){
            setTodos([...todos, {id: Date.now(), text:newTodo.trim(), completed: false}])
            setNewTodo('')
        }
    }

    const handleToggle = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const handleDelete = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Add new todo' onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} />
        <button type='submit'>Add Todo</button>
      </form>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}} >{todo.text}</span>
                    <button onClick={()=> handleToggle(todo.id)} >Toggle</button>
                    <button onClick={()=> handleDelete(todo.id)} >Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
