import { useState, useEffect } from 'react'
import GameBoy from './components/GameBoy'

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
    </div>
  )
}

export default App
