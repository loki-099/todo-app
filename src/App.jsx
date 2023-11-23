import { useState } from 'react';
import './App.css'
import MainContainer from './components/MainContainer';
import Modal from './components/Modal';

function App() {
  const [modalDisplay, setModalDisplay] = useState(false)

  return (
    <div className='bg-gradient-to-tr from-[#3776d4] to-[#51daf5] w-full h-screen flex items-center justify-center'>
      <MainContainer 
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}/>
      <Modal modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} onClose={() => (setModalDisplay(!modalDisplay))}></Modal>
    </div>
  )
}

export default App
