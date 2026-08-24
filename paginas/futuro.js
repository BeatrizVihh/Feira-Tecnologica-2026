document.addEventListener("DOMContentLoaded", function () {

    console.log("futuro.js carregado!");

    /* =====================================
       FUNÇÃO PARA ABRIR MODAL
    ===================================== */

    function abrirModal(modal) {

        if (!modal) return;

        modal.classList.add("ativo");

        document.body.style.overflow = "hidden";
    }


    /* =====================================
       FUNÇÃO PARA FECHAR MODAL
    ===================================== */

    function fecharModal(modal) {

        if (!modal) return;

        modal.classList.remove("ativo");

        document.body.style.overflow = "";
    }


    /* =====================================
       CARDS
    ===================================== */

    const cards = document.querySelectorAll(".card");

    console.log("Cards encontrados:", cards.length);


    /* =====================================
       MODAIS
    ===================================== */

    const modalTecnologia =
        document.getElementById("modalTecnologia");

    const modalDesign =
        document.getElementById("modalDesign");

    const modalAdministracao =
        document.getElementById("modalAdministracao");

    const modalEngenharia =
        document.getElementById("modalEngenharia");


    /* =====================================
       BOTÕES DE FECHAR
    ===================================== */

    const fecharTecnologia =
        document.getElementById("fecharModal");

    const fecharDesign =
        document.getElementById("fecharModalDesign");

    const fecharAdministracao =
        document.getElementById("fecharModalAdministracao");

    const fecharEngenharia =
        document.getElementById("fecharModalEngenharia");


    /* =====================================
       CARD 1 - TECNOLOGIA
    ===================================== */

    if (cards[0] && modalTecnologia) {

        cards[0].addEventListener("click", function () {

            abrirModal(modalTecnologia);

        });

    }


    /* =====================================
       CARD 2 - DESIGN
    ===================================== */

    if (cards[1] && modalDesign) {

        cards[1].addEventListener("click", function () {

            abrirModal(modalDesign);

        });

    }


    /* =====================================
       CARD 3 - ADMINISTRAÇÃO
    ===================================== */

    if (cards[2] && modalAdministracao) {

        cards[2].addEventListener("click", function () {

            abrirModal(modalAdministracao);

        });

    }


    /* =====================================
       CARD 4 - ENGENHARIA
    ===================================== */

    if (cards[3] && modalEngenharia) {

        cards[3].addEventListener("click", function () {

            abrirModal(modalEngenharia);

        });

    }


    /* =====================================
       FECHAR TECNOLOGIA
    ===================================== */

    if (fecharTecnologia) {

        fecharTecnologia.addEventListener("click", function () {

            fecharModal(modalTecnologia);

        });

    }


    /* =====================================
       FECHAR DESIGN
    ===================================== */

    if (fecharDesign) {

        fecharDesign.addEventListener("click", function () {

            fecharModal(modalDesign);

        });

    }


    /* =====================================
       FECHAR ADMINISTRAÇÃO
    ===================================== */

    if (fecharAdministracao) {

        fecharAdministracao.addEventListener("click", function () {

            fecharModal(modalAdministracao);

        });

    }


    /* =====================================
       FECHAR ENGENHARIA
    ===================================== */

    if (fecharEngenharia) {

        fecharEngenharia.addEventListener("click", function () {

            fecharModal(modalEngenharia);

        });

    }


    /* =====================================
       CLICAR FORA DO MODAL
    ===================================== */

    if (modalTecnologia) {

        modalTecnologia.addEventListener("click", function (event) {

            if (event.target === modalTecnologia) {

                fecharModal(modalTecnologia);

            }

        });

    }


    if (modalDesign) {

        modalDesign.addEventListener("click", function (event) {

            if (event.target === modalDesign) {

                fecharModal(modalDesign);

            }

        });

    }


    if (modalAdministracao) {

        modalAdministracao.addEventListener("click", function (event) {

            if (event.target === modalAdministracao) {

                fecharModal(modalAdministracao);

            }

        });

    }


    if (modalEngenharia) {

        modalEngenharia.addEventListener("click", function (event) {

            if (event.target === modalEngenharia) {

                fecharModal(modalEngenharia);

            }

        });

    }      


    /* =====================================
   CARD 5 - COMUNICAÇÃO
===================================== */

const modalComunicacao =
    document.getElementById("modalComunicacao");

const fecharComunicacao =
    document.getElementById("fecharModalComunicacao");


if (cards[4] && modalComunicacao) {

    cards[4].addEventListener("click", function () {

        abrirModal(modalComunicacao);

    });

}


if (fecharComunicacao) {

    fecharComunicacao.addEventListener("click", function () {

        fecharModal(modalComunicacao);

    });

}


if (modalComunicacao) {

    modalComunicacao.addEventListener("click", function (event) {

        if (event.target === modalComunicacao) {

            fecharModal(modalComunicacao);

        }

    });

}

    /* =====================================
   CARD 6 - SAÚDE
===================================== */

const modalSaude =
    document.getElementById("modalSaude");

const fecharSaude =
    document.getElementById("fecharModalSaude");


if (cards[5] && modalSaude) {

    cards[5].addEventListener("click", function () {

        abrirModal(modalSaude);

    });

}


if (fecharSaude) {

    fecharSaude.addEventListener("click", function () {

        fecharModal(modalSaude);

    });

}


if (modalSaude) {

    modalSaude.addEventListener("click", function (event) {

        if (event.target === modalSaude) {

            fecharModal(modalSaude);

        }

    });

}


    /* =====================================
   CARD 7 - EDUCAÇÃO
===================================== */

const modalEducacao =
    document.getElementById("modalEducacao");

const fecharEducacao =
    document.getElementById("fecharModalEducacao");


if (cards[6] && modalEducacao) {

    cards[6].addEventListener("click", function () {

        abrirModal(modalEducacao);

    });

}


if (fecharEducacao) {

    fecharEducacao.addEventListener("click", function () {

        fecharModal(modalEducacao);

    });

}


if (modalEducacao) {

    modalEducacao.addEventListener("click", function (event) {

        if (event.target === modalEducacao) {

            fecharModal(modalEducacao);

        }

    });

}

    /* =====================================
   CARD 8 - CIÊNCIAS HUMANAS
===================================== */

const modalHumanas =
    document.getElementById("modalHumanas");

const fecharHumanas =
    document.getElementById("fecharModalHumanas");


if (cards[7] && modalHumanas) {

    cards[7].addEventListener("click", function () {

        abrirModal(modalHumanas);

    });

}


if (fecharHumanas) {

    fecharHumanas.addEventListener("click", function () {

        fecharModal(modalHumanas);

    });

}


if (modalHumanas) {

    modalHumanas.addEventListener("click", function (event) {

        if (event.target === modalHumanas) {

            fecharModal(modalHumanas);

        }

    });

}


    /* =====================================
       TECLA ESC
    ===================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            fecharModal(modalTecnologia);

            fecharModal(modalDesign);

            fecharModal(modalAdministracao);

            fecharModal(modalEngenharia);

            fecharModal(modalComunicacao);

            fecharModal(modalSaude);

            fecharModal(modalEducacao);

            fecharModal(modalHumanas);

        }

    });

});