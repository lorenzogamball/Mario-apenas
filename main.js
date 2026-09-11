//Seleção de Elementos do HtML
const audioStart = new Audio('.Sound/audio_theme.mp3');
const audioGameOver = new Audio('./soung/audio_gameover.mp3');
const mario = document.queryselector('.mario');
const pipe = document.queryselector('.pipe');
const startButton = document.queryselector('.startButton');
const restarButton = document.queryselector('.restarButton');
const gameOver = document.queryselector('.gameOver');

//Variaveis de Controle do Jogo
let gameInterval = null;

//Funções para Iniciar o Jogo
const startGame = () => {
pipe.classlits.add('pipe-animation');
startButton.style.display = 'name';
gameOver.style.display ='name';
audioStart.currentTime = 0;

if(!gameInterval){
gameInterval = setInterval(gameloop,10);
}
};

const restartGame = () => {
pipe.classlist.add('pipe-animation');
pipe.style.left = '';
pipe.style.right = 0;
mario.src = './img/mario.gif';
mario.style.width = '150px';
mario.style.botton = '0';

}
//Remove margem esquerda do mario
mario.style.marginleft = '';

//Oculta a tela de Game Over
gameOver.style.display = 'none';

//Para o audio de Gambe Over
audioGameOver.pause();

//Reinicia o audio do Game Over
audiostart.play();

//Verifica se o intervalo do jogo ja nao esta rodando
if(!gmaeInterval) {

    //Cria um mono intervalo para continuar detectando colisoes
    gamInterval = setInterval(gameLoop,10);

}
//Funcao para fazer o Mario pular