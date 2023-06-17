import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import GameBoy from './components/GameBoy'
import ColorPicker from './components/ColorPicker';
import Legend from './components/Legend';
import Leaderboard from './components/Leaderboard';
import GameOver from './components/GameOver';
function App() {
  
  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }
  const gameOver = useSelector((state) => state.gameStatus.value.status)
  if (gameOver === true) {
    getModal().showModal()
  }
  return (
    <div className="App">
      <div className='legend-container'>
        <div className='help-button'>
          ?
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
        <Legend />
      </div>
      <div>
        <GameBoy />
        <ColorPicker />
      </div>
      <div className='leaderboard'>
        <Leaderboard />
      </div>
      <dialog className='game-over-modal'>
        <GameOver />
      </dialog>
    </div>
  )
}

export default App
