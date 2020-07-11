let canvas = document.getElementById("snake")
let context = canvas.getContext("2d");
let box = 32; // 32px será de cada quadradinho.
let snake = [];
snake[0] = {
   x: 8 * box,
   y: 8* box
}

function criarBG(){
    context.fillStyle = "lightgreen"; //fillStyle trabalha com o estilo do canvas.
    context.fillRect(0, 0, 16 * box, 16 * box);// fillRect desenha o retângulo onde acontecerá o jogo. O fillRect trabalha com 4 parâmetros. Posição de X, Y, Altura e Largura.
}

function criarCobrinha(){
for(i=0; i < snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
}
}

criarBG();
criarCobrinha();