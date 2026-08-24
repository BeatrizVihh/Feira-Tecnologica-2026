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




 /* =====================================
       TESTE VOCACIONAL
    ===================================== */


document.addEventListener("DOMContentLoaded", function () {
    console.log("Teste vocacional carregado!");

    const testeCard = document.getElementById("testeCard");
    const resultadoCard = document.getElementById("resultadoCard");
    const perguntaContainer = document.getElementById("perguntaContainer");
    const contadorPergunta = document.getElementById("contadorPergunta");
    const progresso = document.getElementById("progresso");
    const botaoVoltar = document.getElementById("botaoVoltar");
    const botaoRefazer = document.getElementById("botaoRefazer");
    const resultadoAreas = document.getElementById("resultadoAreas");

    if (!testeCard || !resultadoCard || !perguntaContainer) {
        console.error("Elementos essenciais do teste não encontrados.");
        return;
    }

    const perguntas = [
        {
            pergunta: "Quando você precisa resolver um problema, você prefere...",
            alternativas: [
                { texto: "Analisar lógica e padrões", pontos: { tecnologia: 2, engenharia: 1 } },
                { texto: "Criar algo visual e original", pontos: { design: 2, comunicacao: 1 } },
                { texto: "Organizar pessoas e processos", pontos: { administracao: 2, educacao: 1 } },
                { texto: "Ajudar e cuidar de pessoas", pontos: { saude: 2, educacao: 1 } }
            ]
        },
        {
            pergunta: "Em um trabalho em grupo, você costuma...",
            alternativas: [
                { texto: "Cuidar da parte técnica/tecnológica", pontos: { tecnologia: 2, engenharia: 1 } },
                { texto: "Cuidar do visual e da apresentação", pontos: { design: 2, comunicacao: 1 } },
                { texto: "Coordenar e dividir tarefas", pontos: { administracao: 2, educacao: 1 } },
                { texto: "Mediar conflitos e apoiar colegas", pontos: { saude: 2, humanas: 1 } }
            ]
        },
        {
            pergunta: "O que mais te dá satisfação?",
            alternativas: [
                { texto: "Entender como as coisas funcionam", pontos: { tecnologia: 2, engenharia: 1 } },
                { texto: "Expressar ideias e sentimentos", pontos: { design: 2, comunicacao: 1 } },
                { texto: "Planejar e alcançar metas", pontos: { administracao: 2, engenharia: 1 } },
                { texto: "Ensinar e aprender com os outros", pontos: { educacao: 2, humanas: 1 } }
            ]
        },
        {
            pergunta: "Nas horas livres, você gosta de...",
            alternativas: [
                { texto: "Mexer com tecnologia, jogos, código", pontos: { tecnologia: 2, engenharia: 1 } },
                { texto: "Desenhar, escrever, criar conteúdo", pontos: { design: 2, comunicacao: 1 } },
                { texto: "Ler sobre sociedade, história, debates", pontos: { humanas: 2, educacao: 1 } },
                { texto: "Praticar esportes, cuidar do corpo", pontos: { saude: 2, educacao: 1 } }
            ]
        },
        {
            pergunta: "Se você fosse criar um projeto, ele seria...",
            alternativas: [
                { texto: "Um app ou site funcional", pontos: { tecnologia: 2, engenharia: 1 } },
                { texto: "Uma marca ou campanha visual", pontos: { design: 2, comunicacao: 1 } },
                { texto: "Um plano de negócio ou evento", pontos: { administracao: 2, comunicacao: 1 } },
                { texto: "Uma ação social ou de saúde", pontos: { saude: 2, humanas: 1 } }
            ]
        },
        {
            pergunta: "As pessoas costumam te dizer que você é...",
            alternativas: [
                { texto: "Lógico(a) e preciso(a)", pontos: { tecnologia: 2, engenharia: 1 } },
                { texto: "Criativo(a) e expressivo(a)", pontos: { design: 2, comunicacao: 1 } },
                { texto: "Líder e organizado(a)", pontos: { administracao: 2, educacao: 1 } },
                { texto: "Empático(a) e atencioso(a)", pontos: { saude: 2, humanas: 1 } }
            ]
        }
    ];

    const areas = {
        tecnologia: {
            nome: "Tecnologia e TI",
            icone: "💻",
            descricao: "Você gosta de lógica, resolução de problemas e inovação digital."
        },
        design: {
            nome: "Design e Comunicação Visual",
            icone: "🎨",
            descricao: "Você tem sensibilidade estética e gosta de criar e expressar."
        },
        administracao: {
            nome: "Administração",
            icone: "📊",
            descricao: "Você demonstra interesse por organização, liderança e planejamento."
        },
        engenharia: {
            nome: "Engenharia e Ciências Exatas",
            icone: "⚙️",
            descricao: "Você pensa de forma estruturada e gosta de resolver problemas técnicos."
        },
        comunicacao: {
            nome: "Comunicação e Mídia",
            icone: "📢",
            descricao: "Você se comunica bem e gosta de conectar pessoas e ideias."
        },
        saude: {
            nome: "Saúde e Cuidado",
            icone: "🩺",
            descricao: "Você é empático(a) e se realiza cuidando do bem-estar das pessoas."
        },
        educacao: {
            nome: "Educação",
            icone: "🎓",
            descricao: "Você gosta de ensinar, aprender e contribuir para o desenvolvimento de outras pessoas."
        },
        humanas: {
            nome: "Ciências Humanas",
            icone: "📚",
            descricao: "Você se interessa por sociedade, história, relações humanas e pensamento crítico."
        }
    };

    let perguntaAtual = 0;
    let respostas = [];
    let pontuacao = {
        tecnologia: 0,
        design: 0,
        administracao: 0,
        engenharia: 0,
        comunicacao: 0,
        saude: 0,
        educacao: 0,
        humanas: 0
    };

    function mostrarPergunta() {
        const pergunta = perguntas[perguntaAtual];

        contadorPergunta.textContent = `${perguntaAtual + 1}/${perguntas.length}`;

        const porcentagem = ((perguntaAtual + 1) / perguntas.length) * 100;
        progresso.style.width = `${porcentagem}%`;

        // Gera o HTML no formato antigo (label + radio) para manter o CSS original
        perguntaContainer.innerHTML = `
            <h3>${pergunta.pergunta}</h3>
            <div class="alternativas">
                ${pergunta.alternativas.map((alt, index) => {
                    const checked = respostas[perguntaAtual] === index ? "checked" : "";
                    return `
                        <label class="alternativa">
                            <input type="radio" name="pergunta${perguntaAtual}" value="${index}" ${checked}>
                            <span class="radio"></span>
                            <span>${alt.texto}</span>
                        </label>
                    `;
                }).join("")}
            </div>
        `;

        botaoVoltar.disabled = perguntaAtual === 0;

        // Evento de clique nas alternativas
        document.querySelectorAll(`input[name="pergunta${perguntaAtual}"]`).forEach(function (input) {
            input.addEventListener("change", function () {
                selecionarResposta(Number(this.value));
            });
        });
    }

    function selecionarResposta(indice) {
        const pergunta = perguntas[perguntaAtual];
        const resposta = pergunta.alternativas[indice];

        if (respostas[perguntaAtual] !== undefined) {
            const anterior = pergunta.alternativas[respostas[perguntaAtual]];
            removerPontos(anterior.pontos);
        }

        respostas[perguntaAtual] = indice;
        adicionarPontos(resposta.pontos);

        setTimeout(function () {
            if (perguntaAtual < perguntas.length - 1) {
                perguntaAtual++;
                mostrarPergunta();
            } else {
                mostrarResultado();
            }
        }, 280);
    }

    function adicionarPontos(pontos) {
        Object.keys(pontos).forEach(area => {
            if (pontuacao.hasOwnProperty(area)) {
                pontuacao[area] += pontos[area];
            }
        });
    }

    function removerPontos(pontos) {
        Object.keys(pontos).forEach(area => {
            if (pontuacao.hasOwnProperty(area)) {
                pontuacao[area] -= pontos[area];
            }
        });
    }

    function mostrarResultado() {
        const ranking = Object.entries(pontuacao).sort((a, b) => b[1] - a[1]);

        const area1 = areas[ranking[0][0]];
        const area2 = areas[ranking[1][0]];

        resultadoAreas.innerHTML = `
            <div class="area-resultado">
                <div class="area-icone">${area1.icone}</div>
                <h3>${area1.nome}</h3>
                <p>${area1.descricao}</p>
            </div>
            <div class="area-resultado">
                <div class="area-icone">${area2.icone}</div>
                <h3>${area2.nome}</h3>
                <p>${area2.descricao}</p>
            </div>
        `;

        testeCard.style.display = "none";
        resultadoCard.classList.add("ativo");
        resultadoCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    botaoVoltar.addEventListener("click", function () {
        if (perguntaAtual === 0) return;

        if (respostas[perguntaAtual] !== undefined) {
            const atual = perguntas[perguntaAtual].alternativas[respostas[perguntaAtual]];
            removerPontos(atual.pontos);
        }

        perguntaAtual--;
        mostrarPergunta();
    });

    botaoRefazer.addEventListener("click", function () {
        perguntaAtual = 0;
        respostas = [];
        pontuacao = {
            tecnologia: 0,
            design: 0,
            administracao: 0,
            engenharia: 0,
            comunicacao: 0,
            saude: 0,
            educacao: 0,
            humanas: 0
        };

        resultadoCard.classList.remove("ativo");
        testeCard.style.display = "block";
        mostrarPergunta();
        testeCard.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    mostrarPergunta();
});