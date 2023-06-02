import { useState, useEffect } from 'react'
import GameBoy from './components/GameBoy'
import ColorPicker from './components/ColorPicker';
import Legend from './components/Legend';
import Leaderboard from './components/Leaderboard';
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

  
  return (
    <div className="App">
      <div>
        <GameBoy />
        <ColorPicker />
      </div>
      <div className='side-content'>
        <Leaderboard />
        <Legend />
      </div>
    </div>
  )
}

export default App
