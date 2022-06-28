var temas = ['Animais', 'Frutas', 'Objetos', 'País', 'Aleatorio'];
var temaSel = document.querySelector('p#tema');
var modos = ['Normal', 'Contra Relógio', 'Hardcore', 'Sem parar'];
var modoSel = document.querySelector('p#modo');

var temaEscolhido = 'Aleatorio';
var modoEscolhido = 'Normal';

function temaPosterior() {
    if (temaSel.innerHTML == 'Tema') {
        temaSel.innerHTML = temas[0];
        temaEscolhido = temas[0];
    } else { 
        var cont;
        for (i = 0; i < (temas.length - 1); i++) {
            if (temaSel.innerHTML == temas[i]) {
                cont = i+1;
            }
            if (temaSel.innerHTML == temas[(temas.length - 1)]) {
                cont = 0;
            }
        }
        temaSel.innerHTML = temas[cont];
        temaEscolhido = temas[cont];
    }
}

function temaAnterior() {
    if (temaSel.innerHTML == 'Tema') {
        temaSel.innerHTML = temas[(temas.length - 1)];
        temaEscolhido = temas[temas.length - 1];
    } else { 
        var cont;
        for (i = (temas.length - 1); i > 0; i--) {
            if (temaSel.innerHTML == temas[i]) {
                cont = i-1;
            }
            if (temaSel.innerHTML == temas[0]) {
                cont = (temas.length - 1);
            }
        }
        temaSel.innerHTML = temas[cont];
        temaEscolhido = temas[cont];
    }
}

function modoPosterior() {
    if (modoSel.innerHTML == 'Modo de Jogo') {
        modoSel.innerHTML = modos[0];
        modoEscolhido = modos[0];
    } else { 
        var cont;
        for (i = 0; i < (modos.length - 1); i++) {
            if (modoSel.innerHTML == modos[i]) {
                cont = i+1;
            }
            if (modoSel.innerHTML == modos[(modos.length - 1)]) {
                cont = 0;
            }
        }
        modoSel.innerHTML = modos[cont];
        modoEscolhido = modos[cont];
    }
}

function modoAnterior() {
    if (modoSel.innerHTML == 'Modo de Jogo') {
        modoSel.innerHTML = modos[(modos.length - 1)];
        modoEscolhido = modos[0];
    } else { 
        var cont;
        for (i = (modos.length - 1); i > 0; i--) {
            if (modoSel.innerHTML == modos[i]) {
                cont = i-1;
            }
            if (modoSel.innerHTML == modos[0]) {
                cont = (modos.length - 1);
            }
        }
        modoSel.innerHTML = modos[cont];
        modoEscolhido = modos[cont];
    }
}

function jogar() {
    // VERIFICAR SE INJETARAM ALGUM TEMA NÃO EXISTENTES
    var verificadorTema = null;
    for (i = 0; i < (temas.length - 1); i++) {
        if (temaEscolhido == temas[i]) {
            verificadorTema++;
        }
    }
    if (verificadorTema == null) {
        temaEscolhido = 'Aleatorio';
    }

    // VERIFICAR SE INJETARAM ALGUM MODO OU TEMA NÃO EXISTENTES
    var verificadorModo = null;
    for (i = 0; i < (modos.length - 1); i++) {
        if (modoEscolhido == modos[i]) {
            verificadorModo++;
        }
    }
    if (verificadorModo == null) {
        modoEscolhido = 'Normal';
    }

    jogo(temaEscolhido, modoEscolhido);
}