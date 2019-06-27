function BulletBoss(x, y, speed) {
    this.status = true;
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = speed;
    this.img = new Image();
    this.img.src = "bullet3.png";
    this.draw = function (ship) {
        ctx.drawImage(this.img, this.x, this.y);
        this.collisionDetection(ship);
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };

    this.collisionDetection = function (ship) {
        let self = this;
        if (self.x + 24 > ship.x && self.x + 24 < ship.x + ship.width) {
            if (self.y + 25 > ship.y && self.y + 25 < ship.y + ship.height) {
                self.status = false;
                ship.status = false;
                lives--;
                document.getElementById("audio3").play();
                return;
            }
            if (lives === 0) {
                alert("GAME OVER");
                document.location.reload();
            }
            self.status = false;
        }
    };
}