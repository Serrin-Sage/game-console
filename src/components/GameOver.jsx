import { useState } from "react"
import { useSelector } from "react-redux"

const GameOver = () => {
  const scoreTotal = useSelector((state) => state.scoreTracker.value.score)
  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }

  const submitScore = async (e) => {
    e.preventDefault()
    let req = await fetch("https://serrin-sage.github.io/snake_game_data/leaderboard.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        name: e.target.name.value,
        score: scoreTotal
      }),
      mode: 'cors'
    })
    let res = await req.json()
    if (req.ok) {
      console.log("SUCCESS")
    } else {
      console.log(res.error)
    }
  }
  return (
    <div className="game-over-container">
      <div className="game-over-text">
        <span>G</span>
        <span>A</span>
        <span>M</span>
        <span>E</span>
        <span className="empty-space"></span>
        <span>O</span>
        <span>V</span>
        <span>E</span>
        <span>R</span>
        <span className="hidden-button">!</span>
      </div>
        {/* <h1>Game Over<span className="hidden-button">!</span></h1> */}
        <h3>Total Score: {scoreTotal}</h3>
        <form onSubmit={submitScore}>
          <div className="score-form-container">
            Submit Score?
            <input type="text" name="name" className=""/>
            <input type="submit" value="submit"/>
          </div>
        </form>
        <div>
          <button onClick={() => getModal().close()}>exit</button>   
        </div>
    </div>
  )
}

export default GameOver