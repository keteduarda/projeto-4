let palavras;
let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);
  palavra=batata();
  musica.loop();
}
function preload(){
  imagem=loadImage("foto.png");
  musica=loadSound("musica.mp3");
}
function draw() {
  chocolate();
  batata();
  
  
  let maximo=width;
  let minimo=0;
  let quantidade=map(mouseX,0,width,1,palavra.length );
  let parcial= palavra.substring(0,quantidade);
  text(parcial, 250,250);
}
function chocolate(){
    background("violet");
  image(imagem,0,0,500,500)
  fill("lightblue");
  textSize(64);
  textAlign(CENTER,CENTER);
}
function batata(){
let palavras=["coxinha","neymar","mcqueen","gabi","gta"];
  return random(palavras);
}