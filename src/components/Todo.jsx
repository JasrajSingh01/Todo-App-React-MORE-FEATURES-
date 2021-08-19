import React from 'react';

function Todo( props ) {
    return (
        <div className="task">
            <div className="todo-data">
            <p class="task-text">{props.text}</p>
            <p class="task-time">{props.time}</p>
            </div>
            <button className="delete-btn" onClick={() => props.removeTodo(props.id)}>Delete</button>
        </div>
    )
}

export default Todo
