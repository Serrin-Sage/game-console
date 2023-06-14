import { useState } from "react"
import { useSelector } from "react-redux"
import axios from 'axios';

const GameOver = () => {
  const scoreTotal = useSelector((state) => state.scoreTracker.value.score)
  const [newName, setNewName] = useState("")
  
  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }

  const submitScore = (e) => {
    e.preventDefault()
    let newScoreObj = {
      name: newName,
      score: scoreTotal.toString()
    }

    console.log(newScoreObj)

    axios.post("https://sheet.best/api/sheets/9c1d38f5-e31f-4d20-8a71-d5db0814efa5", newScoreObj)
    .then (response => {
      getModal().close()
    })
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
            <input type="text" name="name" className="" onChange={(e) => setNewName(e.target.value)}/>
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