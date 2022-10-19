//Código do Carro

let xCarros = [750, 750, 750, 750, 750, 750];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 4, 3.4, 3.8, 2.9, 5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function desenhaCarro(){
  for(let i = 0;i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for(i = 0; i < imagemCarros.length; i++){
    if(passouTela(xCarros[i])){
      xCarros[i] = 750;
    }
  }
}

//Função Para Verificar se o Carro Passou a Tela
function passouTela(xCarros){
  return xCarros < -60;
}  
