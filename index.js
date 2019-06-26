let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let score = 0;
let lives = 3;
let ship = new Ship();
let bullets = [];
let obstacles = [];
let img1 = "spaceship-png-11552949252oedlxwxhur.png";
let img2 = "Animals-Dragonfly-icon.png";
let img3 = "bat-icon 1.png";
let img4 = "101213578-powerful-fighter-jet-fast-military-aircraft-aviation-theme-flat-vector-design-for-online-mobile-game.png";
let arrObstacle = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img4];
let timeOutBullet = 150;
let timeOutObj = 300;
let background = new Image();
background.src = "c21fa842a0d5c860a9159ef5dbcfddfe.jpg";
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        ship.x = relativeX - ship.width / 2;
    }
}
function drawBackground() {
    ctx.drawImage(background,0,0);
}
function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#dddb00";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#b8dd00";
    ctx.fillText("Lives: " + lives, canvas.width - 100, 20);
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
    if (score > 100 && score % 100 <= 20) {
        requestAnimationFrame(addOstacle);
    } else if (score > 400 && score % 100 <= 50) {
        requestAnimationFrame(addOstacle);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBullets();
    drawObstacles();
    ship.draw();
    drawScore();
    drawLives();
    requestAnimationFrame(draw);
}

draw();