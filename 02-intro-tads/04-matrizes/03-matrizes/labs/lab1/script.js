let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.moveTo(100, 100);

let matriz2d = [
    [100,300],
    [300,300],
    [300,100],
    [100,100],
]
for (let i = 0; i < matriz2d.length; i++) {
    ctx.lineTo(matriz2d[i][0], matriz2d[i][1]);  
}

ctx.stroke();

