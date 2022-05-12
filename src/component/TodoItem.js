import React from 'react';

const TodoItem = ({ todo }) => {
    // console.log(props);
    // const todo = props.todo;
    return <li className="todo-list-item">{todo.title}</li>;
};

export default TodoItem;
