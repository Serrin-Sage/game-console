const GameOver = () => {
  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }
  return (
    <div className="game-over-container">
        <h1>Game Over</h1>
        <button onClick={() => getModal().close()}>exit</button>   
    </div>
  )
}

export default GameOver