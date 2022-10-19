//Código do Ator

//Variáveis do Ator
let yAtor = 365;
let xAtor = 120;
let comprimentoAtor = 40;
let alturaAtor = 35;

//Variável p/ Teste de Colisão
let colidiu = false;

//Variável de Pontos
let meusPontos = 0;

function desenhaAtor(){
  image(imagemAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if(keyIsDown(87)){
    yAtor -= 3;
  }
  if(keyIsDown(83)){
    if(podeSeMover()){
     yAtor += 3; 
    }
  }
}

function verificaColisao(){
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for(let i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, comprimentoAtor, alturaAtor)
    if(colidiu){
      voltaAtorInicio();
      somColisao.play();
      perdePontos();
    }
  }
}

function voltaAtorInicio(){
  yAtor = 365;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(200,12,241));
  text(meusPontos, width / 5, 25);
}

function marcaPontos(){
  if(yAtor < 5){
    meusPontos += 1;
    somPonto.play();
    voltaAtorInicio();
  }
}

function perdePontos(){
  if(meusPontos > 0){
    meusPontos -= 1;
  }
}

function podeSeMover(){
  return yAtor<365;
}
