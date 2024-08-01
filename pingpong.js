//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamBolinha/2;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(148,0,211); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
    //chamando a borda
    Borda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
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

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}
function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//função responsável por movementar a raquete 
function movimentaRaquete(){
    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(KeyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }

}

//função responsável por quando a bolinha bater na raquete, retornsar em direção contrária.
function colideRaquete(){
     
    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete ){
         xvelocidadeBolinha *= -1;
    }
}
