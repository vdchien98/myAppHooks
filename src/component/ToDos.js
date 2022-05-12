import React, { useState } from 'react';
import './ToDos.scss';
import TodoItem from './TodoItem';
function Todos() {
    const [todos, setTodos] = useState([
        { id: 1, title: 'viec 1 ' },
        { id: 2, title: 'viec 2 ' },

        { id: 3, title: 'viec 3 ' },
    ]);
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <TodoItem todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default Todos;
