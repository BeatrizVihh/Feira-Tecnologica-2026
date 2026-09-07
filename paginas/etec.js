const frases = [
  "A escola ensina a pensar, mas é você quem escolhe para onde direcionar suas ideias.",
  "Errar uma questão faz parte do treino, o único erro real é deixar de tentar.",
  "Trabalhe duro pelo que você quer, porque isso não virá até você sem luta.",
  "Sua nota em uma prova mede o seu momento, nunca o seu valor ou inteligência.",
  "Começa como um sonho, depois vira realidade.",
  "Aprender algo novo todo dia é a forma mais bonita de evoluir aos poucos.",
  "O aprendizado não termina no diploma, ele acompanha você por toda a vida.",
  "Respeite o seu ritmo de estudos, absorver o conteúdo vale mais do que pressa.",
  "A dúvida não é um sinal de fraqueza, é o começo da sabedoria.",
  "Cada página lida hoje é um degrau que apoia o seu amanhã.",
  "Você não precisa definir o resto da sua vida agora, defina o próximo passo.",
  "Sua profissão ideal nasce do encontro entre o que você gosta e o que pratica.",
  "Não existe escolha errada, toda experiência traz um aprendizado valioso na bagagem.",
  "Se você tem múltiplos talentos, não se mude para uma caixa só, explore-os.",
  "O futuro não é um caminho fechado, você pode mudar de rota quando quiser.",
  "Escolher uma carreira é testar caminhos com curiosidade, sem medo de recalcular.",
  "Sua vocação não é um mistério a ser adivinhado, é algo a ser construído.",
  "Não busque a profissão perfeita, busque aquela que faz sentido para você hoje.",
  "O mercado muda o tempo todo, por isso a melhor habilidade é aprender a aprender.",
  "O sucesso não tem um modelo único, crie a definição que serve para você.",
  "O mercado não busca pessoas perfeitas, busca profissionais dispostos a evoluir.",
  "Seu primeiro emprego é apenas o começo da história, não o resumo da carreira.",
  "Dar o seu melhor hoje é o combustível que abre as portas de amanhã.",
  "Crescimento profissional é feito de competência técnica e conexões humanas reais.",
  "Grandes carreiras são construídas com constância, um tijolo de cada vez.",
  "Aprenda a ouvir feedbacks com maturidade, eles são o atalho para o crescimento.",
  "Não espere pelas condições ideais para começar a se movimentar na carreira.",
  "Mudar de profissão não é começar do zero, é começar com mais bagagem.",
  "O profissional do futuro é aquele que mantém os olhos abertos para aprender.",
  "Valorize cada pequena conquista na sua trajetória, elas constroem sua confiança."
];

let indiceAtual = 0;
const elementoTexto = document.getElementById("texto-frase");
const botaoTrocar = document.getElementById("btn-trocar-frase");

function trocarFrase() {
  elementoTexto.style.opacity = 0;

  setTimeout(() => {
    let novoIndice;
    do {
      novoIndice = Math.floor(Math.random() * frases.length);
    } while (novoIndice === indiceAtual);

    indiceAtual = novoIndice;
    elementoTexto.textContent = `"${frases[novoIndice]}"`;
    elementoTexto.style.opacity = 1;
  }, 300);
}

// ===== MAPA DAS ETECS DO ABC =====
(function () {
  const mapaContainer = document.getElementById('mapa-etecs');
  if (!mapaContainer) return;

  const escolas = [
    { nome: "ETEC de Santo André - Júlio de Mesquita", endereco: "R. Pref. Justino Paixão, 150 - Vila Bastos, Santo André - SP, 09020-130", lat: -23.659605519302566, lng: -46.53046311955408 },
    { nome: "ETEC de São Bernardo - Lauro Gomes", endereco: "Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09751-000", lat: -23.69553836521404, lng: -46.547031831194566},
    { nome: "ETEC de São Caetano - Jorge Street", endereco: "R. Bel Aliance, 149 - Jardim Sao Caetano, São Caetano do Sul - SP, 09581-420", lat: -23.636850562781245, lng: -46.57770939667885 },
    { nome: "ETEC de Diadema - Juscelino Kubitschek", endereco: "R. Guarani, 735 - Conceição, Diadema - SP, 09991-060", lat: -23.6988051731132, lng: -46.61081657352259 },
    { nome: "ETEC de Mauá", endereco: "R. Ribeirão Preto, 75 - Jardim Pedroso, Mauá - SP, 09370-530", lat: -23.67208069624007, lng: -46.462828231195154},
    { nome: "ETEC de Ribeirão Pires - Maria Cristina Medeiros", endereco: "R. Bélgica, 88 - Jardim Alvorada, Ribeirão Pires - SP, 09402-060", lat: -23.703900718046356, lng: -46.41376023913388 }
  ];

  const map = L.map('mapa-etecs').setView([-23.67, -46.52], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Ícone roxo para Ribeirão Pires
  const iconeRoxo = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const iconePadrao = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  escolas.forEach(escola => {
    const icone = escola.nome.includes('Ribeirão Pires') ? iconeRoxo : iconePadrao;
    const marker = L.marker([escola.lat, escola.lng], { icon: icone }).addTo(map);
    marker.bindPopup(`
      <strong>${escola.nome}</strong><br>
      ${escola.endereco}
    `);
  });
})();

setInterval(trocarFrase, 8000);
botaoTrocar.addEventListener("click", trocarFrase);