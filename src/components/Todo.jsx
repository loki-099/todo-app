import React from 'react'

const Todo = ({ todo, todoList, setTodoList }) => {

  const handleDelete = () => {
    setTodoList(todoList.filter(item => item.id !== todo.id))
  }

  return (
    <div className='bg-gray-200 p-2 flex items-center justify-between relative'>
      <h1>{todo.name}</h1>
      <button className='w-[40px] h-full bg-red-400 absolute right-0 text-white text-2xl text-center' onClick={handleDelete}><ion-icon name="trash"></ion-icon></button>
    </div>
  )
}

export default Todo