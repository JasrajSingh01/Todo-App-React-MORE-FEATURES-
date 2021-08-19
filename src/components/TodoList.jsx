import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = (id) => {
        const newArray = todos.filter(todo => todo.id !== id);
        setTodos(newArray); 
      };

    return (
        <div className="main">
            <h1>What's the plan for today?</h1>
            <TodoForm submitTask={addTodo} />
            {todos.map((todo) => (  
            <Todo key={todo.id} id={todo.id} text={todo.text} time={todo.time} removeTodo={removeTodo} /> 
            ))}
        </div> 
    )
}

export default TodoList
