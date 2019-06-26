function Ship() {
    this.height = 48;
    this.width = 48;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height;
    this.img = new Image();
    this.img.src = "airplane-second-world-war-euclidean-vector-wwii-military-aircraft-thumb.png";
    this.draw = function () {
        // ctx.beginPath();
        // ctx.rect(this.x,this.y, this.width, this.height);
        // ctx.fillStyle = "#0095DD";
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(this.img, this.x, this.y);
    };
}