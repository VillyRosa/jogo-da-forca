function verificar(n) {
    var ativada = document.querySelector(`div#${n}`);
    ativada.classList.remove('teclas');
    ativada.classList.add('desativo');
    ativada.onclick = false;
    for (i = 0; i < resposta.length; i++) {
        if (resposta[i] == n) {
            document.querySelectorAll('div.letra')[i].innerHTML = n;
            acertos++;
            if (acertos == resposta.length) {
                setTimeout(alertVenceu, 1000);
                function alertVenceu() {
                    alerta('Parabéns você venceu! 😁<br>Deseja jogar novamente?', 1, temaEscolhido);
                }
                desativarTeclado();
                emJogo = 0;
            }
        }
    }
    // SE NÃO TIVER A LETRA
    if (resposta.indexOf(n) == -1) {
        erros++;
        if (erros == 1) {
            document.querySelector('div.corda').classList.remove('oculto');
            document.querySelector('div.cabeca').classList.remove('oculto');
        }
        if (erros == 2) {
            document.querySelector('div.tronco').classList.remove('oculto');
        }
        if (erros == 3) {
            document.querySelector('div.braco-direito').classList.remove('oculto');
        }
        if (erros == 4) {
            document.querySelector('div.braco-esquerdo').classList.remove('oculto');
        }
        if (erros == 5) {
            document.querySelector('div.perna-direita').classList.remove('oculto');
        }
        if (erros == 6) {
            document.querySelector('div.perna-esquerda').classList.remove('oculto');
            setTimeout(alertPerdeu, 1000);
            function alertPerdeu() {
                alerta('Não foi desta vez! 😢<br>Deseja jogar novamente?', 1, temaEscolhido);
            }
            desativarTeclado();
            emJogo = 0;
        }
    }
}

function ativarTeclado() {
    document.querySelector('div.teclado').innerHTML = `<div id="Q" class="teclas" onclick="verificar('Q')">Q</div>
    <div id="W" class="teclas" onclick="verificar('W')">W</div>
    <div id="E" class="teclas" onclick="verificar('E')">E</div>
    <div id="R" class="teclas" onclick="verificar('R')">R</div>
    <div id="T" class="teclas" onclick="verificar('T')">T</div>
    <div id="Y" class="teclas" onclick="verificar('Y')">Y</div>    
    <div id="U" class="teclas" onclick="verificar('U')">U</div>
    <div id="I" class="teclas" onclick="verificar('I')">I</div>
    <div id="O" class="teclas" onclick="verificar('O')">O</div>
    <div id="P" class="teclas" onclick="verificar('P')">P</div>
    <div class="break"></div>
    <div id="A" class="teclas" onclick="verificar('A')">A</div>
    <div id="S" class="teclas" onclick="verificar('S')">S</div>
    <div id="D" class="teclas" onclick="verificar('D')">D</div>
    <div id="F" class="teclas" onclick="verificar('F')">F</div>
    <div id="G" class="teclas" onclick="verificar('G')">G</div>
    <div id="H" class="teclas" onclick="verificar('H')">H</div>
    <div id="J" class="teclas" onclick="verificar('J')">J</div>
    <div id="K" class="teclas" onclick="verificar('K')">K</div>
    <div id="L" class="teclas" onclick="verificar('L')">L</div>
    <div class="break"></div>
    <div id="Z" class="teclas" onclick="verificar('Z')">Z</div>
    <div id="X" class="teclas" onclick="verificar('X')">X</div>
    <div id="C" class="teclas" onclick="verificar('C')">C</div>
    <div id="V" class="teclas" onclick="verificar('V')">V</div>
    <div id="B" class="teclas" onclick="verificar('B')">B</div>
    <div id="N" class="teclas" onclick="verificar('N')">N</div>
    <div id="M" class="teclas" onclick="verificar('M')">M</div>`
}

function desativarTeclado() {
    var tec = document.querySelectorAll('div.teclas');
    for (i = 0; i < tec.length; i++) {
        tec[i].classList.remove('teclas');
        tec[i].classList.add('desativo');
        tec[i].onclick = false;
    }
}

function limparForca() {
    document.querySelector('div.cabeca').classList.add('oculto');
    document.querySelector('div.tronco').classList.add('oculto');
    document.querySelector('div.braco-direito').classList.add('oculto');
    document.querySelector('div.braco-esquerdo').classList.add('oculto');
    document.querySelector('div.perna-direita').classList.add('oculto');
    document.querySelector('div.perna-esquerda').classList.add('oculto');
}