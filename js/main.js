var emJogo = 0; // Variável que mostra se está em jogo ou não | 1 -Sim / 0 - Não
var erros = null, acertos = null; // Variável que armazena os erros e acertos
var resposta = null; // Variável que guarda a resposta do jogo
var temaEscolhido = null;

var palavra = document.querySelector('div.palavra'); // Container que ficará a palavra

function montarJogo(tema) {
    if (emJogo == 0) {
        temaEscolhido = tema;
        emJogo = 1;
        palavra.innerHTML = '';
        limparForca();
        ativarTeclado();
        erros = 0;
        acertos = 0;
        aleatoriza(temaEscolhido);
        for (i = 0; i < resposta.length; i++) {
            palavra.innerHTML += '<div class="letra"></div>';
        }
    } else {
        alerta('Tem certeza que deseja começar um novo jogo?', 1, tema);
        return;
    }
}