/* MODAIS JS */

document.addEventListener("DOMContentLoaded", function () {

    // Pega todos os cards
    const cards = document.querySelectorAll(".card");

    // Pega o modal de Tecnologia
    const modalTecnologia = document.getElementById("modalTecnologia");

    // Pega o botão de fechar
    const fecharModal = document.getElementById("fecharModal");


    // Primeiro card = Tecnologia e TI
    cards[0].addEventListener("click", function () {

        modalTecnologia.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });


    // Fechar pelo X
    fecharModal.addEventListener("click", function () {

        modalTecnologia.classList.remove("ativo");

        document.body.style.overflow = "";

    });


    // Fechar clicando fora
    modalTecnologia.addEventListener("click", function (event) {

        if (event.target === modalTecnologia) {

            modalTecnologia.classList.remove("ativo");

            document.body.style.overflow = "";

        }

    });


    // Fechar com ESC
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            modalTecnologia.classList.remove("ativo");

            document.body.style.overflow = "";

        }

    });

});