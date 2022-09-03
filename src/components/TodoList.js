import React from 'react';
import TodoComponent from './TodoComponent';

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoComponent
          key={todoItem.id}
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />   
      ))}
    </div>
  );
};

export default TodoList;
