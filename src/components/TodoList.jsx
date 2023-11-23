import React from 'react'
import Todo from './Todo';

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className='w-full space-y-2 max-h-[328px] overflow-y-scroll no-scrollbar'>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>
      ))}
    </div>
  )
}

export default TodoList