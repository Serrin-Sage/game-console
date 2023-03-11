import { useEffect, useRef } from "react"
import { useSelector } from "react-redux";
const SnakeDisplay =()=> {
    const powerStatus = useSelector((state) => state.power.value.status)
    
    useEffect(() => {
        const script = document.createElement('script');
            script.classList.add("snake-script")
            script.src = "src/features/activeGameSnake.js";
            script.async = true;
    
            document.body.appendChild(script);
        },[])
  return (
    <div className="snake-display-container" id="snake-display-container">
        <canvas className="snake-game-board" id="snake-game-board" width="175" height="175"></canvas>
        
    </div>
  )
}

export default SnakeDisplay