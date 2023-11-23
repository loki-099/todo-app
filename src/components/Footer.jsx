import React from 'react'

const Footer = ({ todoList, setTodoList }) => {
  const handleClear = () => {
    setTodoList([])
  }

  return (
    <div className='flex items-center justify-between pb-4 mt-6'>
      <h1>You have {todoList.length} pending tasks</h1>
      {todoList.length ? <button className='py-1 px-2 bg-red-400 text-white' onClick={handleClear}>Clear All</button> : []}
      {/* <button className='py-1 px-2 bg-red-400 text-white' onClick={handleClear}>Clear All</button> */}
    </div>
  )
}

export default Footer