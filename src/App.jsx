import { useState, useEffect } from 'react'
import GameBoy from './components/GameBoy'
import ColorPicker from './components/ColorPicker';
function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "src/features/actions.js";
    script.async = true;

    document.body.appendChild(script);
  },[])
  return (
    <div className="App">
      <GameBoy />
      <ColorPicker />
    </div>
  )
}

export default App
