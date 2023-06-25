import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { gameOver, gameReset } from "../features/checkStatus";
import { updateScore, resetScore } from "../features/scoreTracker";

const SnakeDisplay =()=> {
  const powerStatus = useSelector((state) => state.power.value.status)
  const dispatch = useDispatch()
  const [gameRunning, setGameRunning] = useState(false)
//   const [gameEnd, setGameEnd] = useState(false)
  const [gameBoard, setGameBoard] = useState(null)
  const [scoreText, setScoreText] = useState(null)
  const [context, setContext] = useState(null)

  const getModal = () => {
    const modal = document.querySelector('.game-over-modal')
    return modal
  }

  useEffect(() => {
    const gameBoard = document.querySelector("#snake-game-board");
    const scoreText = document.querySelector("#score");
    const context = gameBoard.getContext("2d")
    
    setGameBoard(gameBoard)
    setScoreText(scoreText)
    setContext(context)
  }, []);

  const gameWidth = gameBoard ? gameBoard.width : 0;
  const gameHeight = gameBoard ? gameBoard.height : 0;
  const snakeColor = "#30623";
  const snakeBorder = "black";
  const foodColor = 'rgba(48, 98, 48,0.5)';

  const unitSize = 15;

  let running = false;
  let gameEnd = false
  let xVelocity = unitSize;
  let yVelocity = 0;

  let foodX;
  let foodY;

  let score = 0;

  let snake = [
      {x: unitSize * 2, y: 0},
      {x: unitSize, y: 0},
      {x: 0, y: 0}
  ];

  const gameStart = () => {
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
    dispatch(gameReset())
  }
  
  const nextTick = () => {
      if (running) {
          setTimeout(() => {
              clearBoard();
              drawFood();
              moveSnake();
              drawSnake();
              checkGameOver();
              nextTick();
          }, 140)
      } else if (gameEnd === true) {
        
        displayGameOver();
      }
  }
    
  const clearBoard = () => {
      context.fillStyle = 'rgba(139,172,15,0.8)'
      context.fillRect(0, 0, gameWidth, gameHeight)
  }
  
  const createFood = () => {
      const randomFood = (min, max) => {
          const randomNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
          return randomNum
      }
      foodX = randomFood(0, gameWidth - unitSize)
      foodY = randomFood(0, gameWidth - unitSize)
  }
  
  const drawFood = () => {
      context.fillStyle = foodColor;
      context.fillRect(foodX, foodY, unitSize, unitSize)
  }
  
  const moveSnake = () => {
      const snakeHead = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity}
      snake.unshift(snakeHead);
      //if food is eaten
      if (snake[0].x == foodX && snake[0].y == foodY) {
          score+=1
          scoreText.textContent = score
          createFood();
      } else {
          snake.pop();
      }
  }
    
  const drawSnake = () => {
      context.fillStyle = snakeColor;
      context.strokeStyle = snakeBorder;
      snake.forEach(snakePart => {
          context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
          context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
      })
  }
    
  const changeDirection = (event) => {
      const keyPressed = event.key
      const LEFT = "a"
      const RIGHT = "d"
      const UP = "w"
      const DOWN = "s"
  
      const movingUp = (yVelocity == -unitSize)
      const movingDown = (yVelocity == unitSize)
      const movingRight = (xVelocity == unitSize)
      const movingLeft = (xVelocity == -unitSize)
  
      switch(true) {
          case (keyPressed == LEFT && !movingRight):
              xVelocity = -unitSize
              yVelocity = 0
              break;
          case (keyPressed == UP && !movingDown):
              xVelocity = 0
              yVelocity = -unitSize
              break;
          case (keyPressed == RIGHT && !movingLeft):
              xVelocity = unitSize
              yVelocity = 0
              break;
          case (keyPressed == DOWN && !movingUp):
              xVelocity = 0
              yVelocity = unitSize
              break
      }
  }
    
    const checkGameOver = () => {
        switch (true) {
            case (snake[0].x < 0):
                gameEnd = true
                running = false
                break;
            case (snake[0].x >= gameWidth):
                gameEnd = true
                running = false
                break;
            case (snake[0].y < 0):
                gameEnd = true
                running = false
                break;
            case (snake[0].y >= gameHeight):
                gameEnd = true
                running = false
                break;
        }
    
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
                gameEnd = true
                running = false
            }
        }
        
    }
    
    const displayGameOver = () => {
        dispatch(gameOver())
        dispatch(updateScore({score: score}))
        window.addEventListener("keydown", handleGameReset)
    }
    
    const resetGame = () => {
        score = 0
        xVelocity = unitSize
        yVelocity = 0
        snake = [
            {x: unitSize * 2, y: 0},
            {x: unitSize, y: 0},
            {x: 0, y: 0}
        ];
        gameStart();
        
    }
    
    const handleGameStart = (event) => {
      if (gameRunning) return 
      else {
        if (event.key === "j") {
        setGameRunning(true)
        gameStart();
        window.addEventListener("keydown", changeDirection);
        window.removeEventListener("keydown", handleGameStart)
            }
        }
    }
    
    const handleGameReset = (event) => {
      if (event.key === "k") {
        gameEnd = false
        getModal().close()
        resetGame()
        window.removeEventListener("keydown", handleGameReset)
      }
    }

    window.addEventListener("keydown", handleGameStart)
    
  return (
    <div className="snake-display-container" id="snake-display-container" >
        {gameRunning ? null : <div className="start-btn">READY?</div>}
        {gameEnd ? <div className="game-over">
                    <h3>GAME OVER</h3>
                    <br/>
                    press K to retry
                   </div> : null } 
        <canvas className="snake-game-board" id="snake-game-board" width="175" height="175"></canvas>
        <span id="score"></span>  
    </div>
  )
}

export default SnakeDisplay