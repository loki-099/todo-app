import React from 'react'
import shortid from 'shortid';

const AddTodo = ({ todo, setTodo, todoList, setTodoList, modalDisplay, setModalDisplay }) => {
  const handleType = (event) => {
    setTodo(event.target.value)
  }

  const handleModalDisplay = () => {
    setModalDisplay(!modalDisplay)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    todo ? (setTodoList([...todoList, { name: todo, id: shortid.generate()}]), setTodo('')) : handleModalDisplay()
  }

  return (
    <form onSubmit={handleAdd} className='w-full flex items-center gap-1 my-4'>
      <input 
        type="text" 
        value={todo} 
        onChange={handleType} 
        className='border-2 border-gray-200 p-2 flex-grow outline-none'/>
      <button
        type='submit' 
        className='h-[44px] w-[44px] bg-blue-400 text-4xl text-center text-white flex items-center justify-center'><ion-icon name="add-outline"></ion-icon></button>
    </form>
  )
}

export default AddTodo