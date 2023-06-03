import { useSelector } from "react-redux"

const GameOver = () => {
  const scoreTotal = useSelector((state) => state.scoreTracker.value.score)
  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }
  return (
    <div className="game-over-container">
        <h1>Game Over</h1>
        <h3>Total Score: {scoreTotal}</h3>
        <button onClick={() => getModal().close()}>exit</button>   
    </div>
  )
}

export default GameOver