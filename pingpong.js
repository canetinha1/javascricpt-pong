//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}
function draw(){
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}
 
 function Borde(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
 }