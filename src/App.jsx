import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import GameBoy from './components/GameBoy'
import ColorPicker from './components/ColorPicker';
import Legend from './components/Legend';
import Leaderboard from './components/Leaderboard';
import GameOver from './components/GameOver';
function App() {
  // useEffect(() => {
  //   const loadScript = async () => {
  //     const script = document.createElement('script');
  
  //     script.src = "src/features/actions.js";
  //     script.async = true;
  
  //     document.body.appendChild(script);
      
  //   }
  //   loadScript()
  // },[])
  
  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }
  const gameOver = useSelector((state) => state.gameStatus.value.status)
  if (gameOver === true) {
    // modal.showModal()
    getModal().showModal()
  }
  return (
    <div className="App">
      <div>
        <GameBoy />
        <ColorPicker />
      </div>
      <div className='side-content'>
        {/* <Leaderboard /> */}
        <Legend />
      </div>
      <dialog className='game-over-modal'>
        <GameOver />
      </dialog>
    </div>
  )
}

export default App
