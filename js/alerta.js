var caixaAlerta = document.querySelector('div.caixa-de-alerta');
var txtAlerta = document.querySelector('span#txt-span');
var botoes = document.querySelector('div.btns');

function alerta(texto, num, tema) {
    temaEscolhido = tema;
    caixaAlerta.classList.remove('oculto');
    txtAlerta.innerHTML = texto;
    if (num == 0) {
        botoes.classList.add('oculto');
    } else {
        botoes.classList.remove('oculto');
    }
}

function confirmar() {
    caixaAlerta.classList.add('oculto');
    botoes.classList.add('oculto');
    emJogo = 0;
    montarJogo(temaEscolhido);
}

function negar() {
    caixaAlerta.classList.add('oculto');
    botoes.classList.add('oculto');
}