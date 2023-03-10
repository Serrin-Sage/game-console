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


export const gameStart = () => {
    console.log(gameBoard)
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
        }, 120)
    } else {
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
            running = false
            break;
        case (snake[0].x >= gameWidth):
            running = false
            break;
        case (snake[0].y < 0):
            running = false
            break;
        case (snake[0].y >= gameHeight):
            running = false
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false
        }
    }
}

const displayGameOver = () => {
    console.log("GAME OVER")
    return score
}

const resetGame = () => {
    score = 0
    xVelocity = unitSize
    yVelocity = 0
    let snake = [
        {x: unitSize * 4, y: 0},
        {x: unitSize * 3, y: 0},
        {x: unitSize * 2, y: 0},
        {x: unitSize, y: 0},
        {x: 0, y: 0}
    ];
}


window.addEventListener("keydown", changeDirection);
// export default {gameStart}