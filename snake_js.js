let score = 0;
let box = 32;
let snake = [];
snake[0] = { x: 9 * box, y: 9 * box };
let fruit = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const foodImg = new Image();
foodImg.src = "food.png";

const ground = new Image();
ground.src = "ground.png";

document.addEventListener("keydown", direction);

let key;
let head_x;
let head_y;

function direction(event) {
    if (event.keyCode === 37 && key !== "Right") {
        key = "Left";
    }
    if (event.keyCode === 38 && key !== "Down") {
        key = "Up";
    }
    if (event.keyCode === 39 && key !== "Left") {
        key = "Right";
    }
    if (event.keyCode === 40 && key !== "Up") {
        key = "Down";
    }


}////

function draw() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, fruit.x, fruit.y);


    for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = "black";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

    }
    head_x = snake[0].x;
    head_y = snake[0].y;

    if (key === "Left") {
        head_x -= box;

    }

    if (key === "Up") {
        head_y -= box;

    }

    if (key === "Right") {
        head_x += box;
    }

    if (key === "Down") {

        head_y += box;
    }

    if (head_x === fruit.x && head_y === fruit.y) {

        fruit = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
        score += 1;

    } else {

        var pop = snake.pop();

    }


    function error(arr_start, array) {
        for (let i = 0; i < array.length; i++) {
            if (arr_start.x === array[i].x && arr_start.y === array[i].y) {
                return true;
            }
        }
        return false;
    }///////


    if (head_x < 0 || head_x > 608 || head_y < 0 || head_y > 608 || error({ x: head_x, y: head_y },snake)) {


        clearInterval(game);
        ctx.fillStyle = "white";
        ctx.font = "45px Changa one";
        ctx.fillText("Game over SCORE :"+score, 2 * box, 1.6 * box);
    }
    
    let element = { x: head_x, y: head_y };

    snake.unshift(element);

    var s = document.getElementById("score");
    s.innerHTML = "SCORE :" + score;

}/////



let game = setInterval(draw, 100);