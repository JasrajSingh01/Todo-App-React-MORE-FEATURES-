import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ submitTask }) {

    const [input, setInput] = useState('');
    const [time, setTime] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        submitTask({
            id: uuidv4(),
            text: input,
            time: time,
        })     
    }

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <div className="input-box">
                <input type="text" placeholder="Add a Todo" name="text" className="todo-input" onChange={(e) => setInput(e.target.value)} />
                <input type="time" name="text" className="todo-time" onChange={(e) => setTime(e.target.value)} />
            </div>
            <button className="todo-btn" type="submt">Add Todo</button>
        </form>
    )
}

export default TodoForm
