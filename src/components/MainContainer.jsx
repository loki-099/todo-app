import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const MainContainer = ({ modalDisplay, setModalDisplay }) => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <div className='w-full h-full max-w-[375px] md:h-[550px] bg-white p-6 shadow-xl shadow-black/30'>
      <h1 className='text-2xl font-bold'>Todo App</h1>
      <AddTodo 
        todo={todo} 
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      <Footer todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default MainContainer