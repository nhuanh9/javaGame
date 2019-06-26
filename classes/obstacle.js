function Obstacle() {

    this.status = true;
    this.x = Math.floor((Math.random() * canvas.height) + 1);
    this.y = 0;
    this.dx = Math.random();
    this.dy = 2;
    // this.width = Math.floor((Math.random() * 50) + 30);
    // this.height = Math.floor((Math.random() * 50) + 30);
    this.width = 72;
    this.height = 72;
    this.img = new Image();
    this.img.src = "bat-icon.png";
    this.timeoutObs = 300;
    this.draw = function () {
        // ctx.beginPath();
        // ctx.rect(this.x, this.y, this.width, this.height);
        // ctx.fillStyle = "#dd0007";
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(this.img, this.x, this.y);
        this.collisionDetection();
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };

    this.collisionDetection = function () {
        if (score>100){
            this.dy = 5;
        } else if (score>300){
            this.dy = 10;
        } else if (score>500){
            this.dy = 20;
        }

        if (this.x > canvas.width || this.x < 0 || this.y + this.height > canvas.height) {
            this.status = false;
            return;
        }

        if (this.y + this.height > canvas.height - ship.height && (this.x > ship.x && this.x < ship.x + ship.width || ship.x >= this.x && ship.x < this.x + this.width)) {
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            this.status = false;
        }
    }
}