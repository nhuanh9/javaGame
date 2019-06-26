let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let score = 0;
let lives = 3;
let ship = new Ship();
let bullets = [];
let obstacles = [];
let img1 = "bat-icon.png";
let img2 = "Animals-Dragonfly-icon.png";
let img3 = "bat-icon 1.png";
let img4 = "Bats-icon.png";
let arrObstacle = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img4];
let timeOutBullet = 150;
let timeOutObj = 300;
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        ship.x = relativeX - ship.width / 2;
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function drawBullets() {
    bullets = bullets.filter(e => e.status);

    bullets.forEach(function (bullet) {
        bullet.draw();
        bullet.move();
    })
}

function shoot() {
    let bullet = new Bullet(ship.x + ship.width / 3, ship.y);
    bullets.push(bullet);
}

setInterval(shoot, timeOutBullet);

function addOstacle() {
    let obstacle = new Obstacle();
    obstacle.img.src = arrObstacle[Math.round(Math.random() + 8)];
    obstacles.push(obstacle);
}

setInterval(addOstacle, timeOutObj);

function drawObstacles() {
    obstacles = obstacles.filter(e => e.status);
    obstacles.forEach(function (obstacle) {
        obstacle.draw();
        obstacle.move();
    })
}

function draw() {
    if (score >100 && score%100 <= 20) {
        requestAnimationFrame(addOstacle);
    } else if (score >400 && score%100 <= 50){
        requestAnimationFrame(addOstacle);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBullets();
    drawObstacles();
    ship.draw();
    drawScore();
    drawLives();
    requestAnimationFrame(draw);
}

draw();