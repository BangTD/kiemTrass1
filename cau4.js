function Rectangle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

Rectangle.prototype.render = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

function onClick() {
    let q = new Rectangle(10, 10, 200, 100 , getRandomColor() /*"#000000"*/);
    q.render();
}
// -----------------
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}