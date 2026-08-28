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
  
  setInterval(trocarFrase, 8000);
  botaoTrocar.addEventListener("click", trocarFrase);