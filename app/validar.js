function verificarChute(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {

        if(chute.toUpperCase() === "GAME OVER") {
            
            document.body.innerHTML = `
            <h2><i class="fa-solid fa-triangle-exclamation"></i> GAME OVER <i class="fa-solid fa-triangle-exclamation"></i></h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;

            document.body.style.backgroundColor = "#213E3B";

        } else {
            elementoChute.innerHTML += '<div>Valor inválido !</div>';
        }
       
        return;
    }

    if(chuteNumeroPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou <i class="fa-solid fa-hands-clapping"></i></h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;

    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`;

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteNumeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});