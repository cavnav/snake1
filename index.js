(() => {canvasElement = document.getElementById('gameField');
canvasElement.width = 400;
canvasElement.height = 400;
canvasContext = canvasElement.getContext("2d");

x = 0;
y = 0;
dx = 0;
dy = 0;

setInterval(() => {
  x = x + dx;
  y = y + dy;
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, 400, 400);

  canvasContext.fillStyle = "red";
  canvasContext.fillRect(5 * 20, 0 * 20, 20, 20);

  canvasContext.fillStyle = "lime";
  canvasContext.fillRect(x * 20, y * 20, 20, 20);
}, 1000);

document.addEventListener("keydown", keydown);

function keydown(event) {
  switch (event.keyCode) {
    case 37:
      dx = -1;
      dy = 0;
      break;
    case 38:
      dx = 0;
      dy = -1;
      break;
    case 39:
      dx = 1;
      dy = 0;
      break;
    case 40:
      dx = 0;
      dy = 1;
      break;
  }
}
})();