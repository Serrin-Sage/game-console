const gameBoard = document.querySelector("#snake-game-board");
const scoreText = document.querySelector("#score");
const context = gameBoard.getContext("2d")
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const snakeColor = "#306230";
const snakeBorder = "black";
const foodColor = 'rgba(48, 98, 48,0.5)';

const unitSize = 15;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;

let foodX;
let foodY;

let score = 0;

let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize, y: 0},
    {x: 0, y: 0}
];

// window.addEventListener("keydown", changeDirection);


const gameStart = () => {
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
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
        }, 75)
    } else {
        displayGameOver();
    }
}

const clearBoard = () => {
    context.fillStyle = 'rgba(255, 255, 255, 0.5)'
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
    if (false) {

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

const changeDirection = () => {

}

const checkGameOver = () => {

}

const displayGameOver = () => {

}

const resetGame = () => {

}

gameStart();
