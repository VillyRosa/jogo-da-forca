function menuOpen() {
    document.querySelector('div.container-menu').classList.remove('hidden');
}

// Palavra escolhida
var resposta = null;

// Letras
var letras = document.querySelector('div.slots');

// Erros e Acertos
var erros = null, acertos = null;

function jogo(tema='Aleatorio', modo='Normal') {

    // RESPOSTAS
    var animais = ['cachorro', 'gato', 'coelho', 'zebra', 'canguru'];
    var frutas = ['abacate', 'banana', 'pera', 'morango', 'manga'];
    var objetos = ['celular', 'garrafa', 'caderno', 'ventilador'];
    var pais = ['brasil', 'china', 'argentina', 'uruguai'];

    // VARIÁVEIS
    var menu = document.querySelector('div.container-menu');

    menu.classList.add('hidden');

    switch (modo) {
        case 'Normal':
            aleatorizarPalavra();
            for (i = 0; i < resposta.length; i++) {
                letras.innerHTML += '<div class="letra"></div>';
            }
            document.querySelector('div.container-jogo').classList.remove('hidden');
            // alert(resposta);
            // alert(resposta.length);
        break
        case 'Contra Relógio':

        break
        case 'Hardcore':

        break
        case 'Sem parar':

        break
    }

    function aleatorizarPalavra() {
        if (tema == 'Aleatorio') {
            var randomTema = ['Frutas', 'Animais', 'Objetos', 'País'];
            resposta = Math.floor(Math.random() * randomTema.length);
            tema = randomTema[resposta];
        }
        if (tema == 'Animais') {
            resposta = Math.floor(Math.random() * animais.length);
            resposta = animais[resposta];
        }
        if (tema == 'Frutas') {
            resposta = Math.floor(Math.random() * frutas.length);
            resposta = frutas[resposta];
        }
        if (tema == 'Objetos') {
            resposta = Math.floor(Math.random() * objetos.length);
            resposta = objetos[resposta];
        }
        if (tema == 'País') {
            resposta = Math.floor(Math.random() * pais.length);
            resposta = pais[resposta];
        }
    }

}

function verifica(n) {
    var i = document.querySelector(`div.${n}`);
    i.classList.remove('letras');
    i.classList.add('desativo');
    if (resposta.indexOf(n) != -1) {
        console.log(n);
        var letra = document.querySelectorAll('div.letra');
        i.onclick = false;
        
        for (i = 0; i < (resposta.length); i++) {
            if (n == resposta[i]) {
                letra[i].innerHTML = n;
                acertos++;
            }
        }
    } else {
        erros++
        if (erros == 1) {
            document.querySelector('div.cabeca').classList.remove('hidden');
        }
        if (erros == 2) {
            document.querySelector('div.corpo').classList.remove('hidden');
        }
        if (erros == 3) {
            document.querySelector('div.braco-direito').classList.remove('hidden');
        }
        if (erros == 4) {
            document.querySelector('div.braco-esquerdo').classList.remove('hidden');
        }
        if (erros == 5) {
            document.querySelector('div.perna-direita').classList.remove('hidden');
        }
        if (erros == 6) {
            document.querySelector('div.perna-esquerda').classList.remove('hidden');
        }
    }
}