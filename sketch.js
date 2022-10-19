function setup() {
  createCanvas(700, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada); 
  desenhaAtor();
  desenhaCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  verificaColisao2();
  mostraPontos();
  marcaPontos();
  desenhaAtor2();
  movimentaAtor2();
  mostraPontos2();
  marcaPontos2();
}
