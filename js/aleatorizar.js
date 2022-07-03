function aleatoriza(tema) {
    if (tema == 'aleatorio') {
        var randomTema = ['animais', 'frutas', 'objetos'];
        resposta = Math.floor(Math.random() * randomTema.length);
        tema = randomTema[resposta];
    }
    if (tema == 'animais') {
        resposta = Math.floor(Math.random() * animais.length);
        resposta = animais[resposta];
    }
    if (tema == 'frutas') {
        resposta = Math.floor(Math.random() * frutas.length);
        resposta = frutas[resposta];
    }
    if (tema == 'objetos') {
        resposta = Math.floor(Math.random() * objetos.length);
        resposta = objetos[resposta];
    }
}