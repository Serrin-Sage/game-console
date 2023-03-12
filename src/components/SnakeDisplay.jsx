import { useEffect, useRef } from "react"
import { useSelector } from "react-redux";
const SnakeDisplay =()=> {
    const powerStatus = useSelector((state) => state.power.value.status)

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/src/features/activeGameSnake.js';
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div className="snake-display-container" id="snake-display-container" >
        <canvas className="snake-game-board" id="snake-game-board" width="175" height="175"></canvas>
        <span id="score"></span>
        {/* <script src="/src/features/activeGameSnake.js"></script> */}
    </div>
  )
}

export default SnakeDisplay