//Código do Ator Oponente

//Variáveis do Ator do 
let yAtor2 = 365;
let xAtor2 = 490;
let comprimentoAtor2 = 40;
let alturaAtor2 = 35;

//Variável p/ Teste de Colisão 
let colidiu2 = false;

//Variável de Pontos
let pontosOp = 0;

function desenhaAtor2(){
  image(imagemAtor2, xAtor2, yAtor2, comprimentoAtor2, alturaAtor2);
}

function movimentaAtor2(){
  if(keyIsDown(UP_ARROW)){
    yAtor2 -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover2()){
     yAtor2 += 3; 
    }
  }
}

function verificaColisao2(){
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for(let i = 0; i < imagemCarros.length; i++){
    colidiu2 = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor2, yAtor2, comprimentoAtor2, alturaAtor2)
    if(colidiu2){
      voltaAtorInicio2();
      somColisao.play();
      perdePontos2();
    }
  }
}

function voltaAtorInicio2(){
  yAtor2 = 365;
}

function mostraPontos2(){
  textAlign(CENTER);
  textSize(25);
  fill(color(200,12,241));
  text(pontosOp, width / 1.37, 25);
}

function marcaPontos2(){
  if(yAtor2 < 5){
    pontosOp += 1;
    somPonto.play();
    voltaAtorInicio2();
  }
}

function perdePontos2(){
  if(pontosOp > 0){
    pontosOp -= 1;
  }
}

function podeSeMover2(){
  return yAtor2<365;
}
