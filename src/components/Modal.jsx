import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ modalDisplay, setModalDisplay, onClose }) => {
  let classDisplay = modalDisplay ? 'fixed' : 'hidden'
  const handleModalDisplay = () => {
    setModalDisplay(!modalDisplay)
  }

  return createPortal(
    <>
      <div className={`${classDisplay} top-0 right-0 bottom-0 left-0 bg-black/50 flex items-center justify-center`}>
        <div className='w-[80%] max-w-xl bg-white p-4 shadow-md shadow-black flex items-center'>
          <span className='w-full text-center text-2xl text-red-400 flex items-center gap-1'><ion-icon name="warning-outline"></ion-icon><h1 className='text-base'>Text can't be empty!</h1></span>
          <button className='bg-green-400 px-2 py-1 font-bold float-right' onClick={onClose}>OK!</button>
        </div>
      </div>
    </>, document.getElementById('modal')
  )
}

export default Modal