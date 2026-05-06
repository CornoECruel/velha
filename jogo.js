const pesos = [3, 5, 7, 11, 13, 17, 19, 23, 29];
const vitorias = [105, 2431, 12673, 627, 1495, 3451, 1131, 1729];

let tabuleiro = ['', '', '', '', '', '', '', '', ''];
var scoreX = 1;
var scoreO = 1;
var turnoDoX = true;
var jogoAcabou = false;

function fazerJogada(posicao) {
    if (jogoAcabou == true) {z
        return;
    }
    if (tabuleiro[posicao] != '') {
        return;
    }

    var statusTexto = document.getElementById('status');
    var todosBotoes = document.getElementsByTagName('button');

    if (turnoDoX == true) {
        tabuleiro[posicao] = 'X';
        scoreX = scoreX * pesos[posicao];
        todosBotoes[posicao].innerText = 'X';

        if (verificarVencedor(scoreX) == true) {
            statusTexto.innerText = "Jogador X venceu!";
            jogoAcabou = true;
        }
        else if (verificarEmpate() == true) {
            statusTexto.innerText = "Deu Velha!";
            jogoAcabou = true;
        } 
        else {
            turnoDoX = false;
            statusTexto.innerText = "Vez do Jogador O";
        }
    } 
    else {
        tabuleiro[posicao] = 'O';
        scoreO = scoreO * pesos[posicao];
        todosBotoes[posicao].innerText = 'O';

        if (verificarVencedor(scoreO) == true) {
            statusTexto.innerText = "Jogador O venceu!";
            jogoAcabou = true;
        }
        else if (verificarEmpate() == true) {
            statusTexto.innerText = "Deu Velha!";
            jogoAcabou = true;
        } 
        else {
            turnoDoX = true;
            statusTexto.innerText = "Vez do Jogador X";
        }
    }
}


function verificarVencedor(score) {
    for (var i = 0; i < 8; i = i + 1) {
        var resultadoVitoria = vitorias[i];
        if (score % resultadoVitoria == 0) {
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    for (var i = 0; i < 9; i = i + 1) {
        if (tabuleiro[i] == '') {
            return false;
        }
    }
    return true;
}

function resetarTabuleiro() {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    scoreX = 1;
    scoreO = 1;
    turnoDoX = true;
    jogoAcabou = false;

    var statusTexto = document.getElementById('status');
    statusTexto.innerText = "Vez do Jogador X";

    var todosBotoes = document.getElementsByTagName('button');
    for (var i = 0; i < 9; i = i + 1) {
        todosBotoes[i].innerText = '-';
    }
}