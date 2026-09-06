// Estrutura de código - Portifólio

function mostrarnav1(){

    const home = document.getElementById("home");
    const sobre = document.getElementById("sobre");
    const sobre1 = document.getElementById("sobre1");
    const projeto = document.getElementById("projeto");
    const contato = document.getElementById("contato");

    projeto.classList.add("oculto");
    projeto.classList.remove("projeto");

    home.classList.add("main");
    home.classList.remove("oculto");

    sobre.classList.add("oculto");
    sobre.classList.remove("sobre");

    sobre1.classList.add("oculto");
    sobre1.classList.remove("sobre1");

    contato.classList.add("oculto");
    contato.classList.remove("rodape");
}

function mostrarsobre(){

    const home = document.getElementById("home");
    const sobre = document.getElementById("sobre");
    const sobre1 = document.getElementById("sobre1");
    const projeto = document.getElementById("projeto");
    const contato = document.getElementById("contato");

    projeto.classList.add("oculto");
    projeto.classList.remove("projeto");

    sobre.classList.add("sobre");
    sobre.classList.remove("oculto");

    sobre1.classList.add("sobre1");
    sobre1.classList.remove("oculto");

    home.classList.add("oculto");
    home.classList.remove("main");

    contato.classList.add("oculto");
    contato.classList.remove("rodape");
}

function mostrarprojeto(){

    const home = document.getElementById("home");
    const sobre = document.getElementById("sobre");
    const sobre1 = document.getElementById("sobre1");
    const projeto = document.getElementById("projeto");
    const contato = document.getElementById("contato");

    home.classList.add("oculto");
    home.classList.remove("main");

    sobre.classList.add("oculto");
    sobre.classList.remove("sobre");

    sobre1.classList.add("oculto");
    sobre1.classList.remove("sobre1");

    projeto.classList.add("projeto");
    projeto.classList.remove("oculto");

    contato.classList.add("oculto");
    contato.classList.remove("rodape");
}

function mostrarcontato(){

    const home = document.getElementById("home");
    const sobre = document.getElementById("sobre");
    const sobre1 = document.getElementById("sobre1");
    const projeto = document.getElementById("projeto");
    const contato = document.getElementById("contato");

    projeto.classList.add("oculto");
    projeto.classList.remove("projeto");

    sobre.classList.add("oculto");
    sobre.classList.remove("sobre");

    sobre1.classList.add("oculto");
    sobre1.classList.remove("sobre1");

    home.classList.add("oculto");
    home.classList.remove("main");

    contato.classList.add("rodape");
    contato.classList.remove("oculto");
}


