const MODOS = {
  foco: {
    tempo: 25 * 60,
    label: "Foco",
    mensagem: "☕ Pausa de 5min ao terminar",
    corClasse: ""
  },
  curta: {
    tempo: 5 * 60,
    label: "Pausa curta",
    mensagem: "Respire, alongue e hidrate-se",
    corClasse: "modo-curta"
  },
  longa: {
    tempo: 15 * 60,
    label: "Pausa longa",
    mensagem: "Respire, alongue e hidrate-se",
    corClasse: "modo-longa"
  }
};

const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 90; 

function atualizarTimerDisplay(tempoRestante, tempoTotal) {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    
    document.getElementById('timer-display').textContent = 
        `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    const circleBar = document.getElementById('circle-bar');
    if (circleBar) {
        const fracao = tempoRestante / tempoTotal;
        const offset = CIRCLE_CIRCUMFERENCE * (1 - fracao);
        
        circleBar.style.strokeDasharray = `${CIRCLE_CIRCUMFERENCE}`;
        circleBar.style.strokeDashoffset = `${offset}`;
    }
}

const timerCircle = document.querySelector('.timer-circle');

function alterarModo(novoModo) {
  timerCircle.classList.remove('mode-foco', 'mode-pausa-curta', 'mode-pausa-longa');

  if (novoModo === 'curta') {
    timerCircle.classList.add('mode-pausa-curta');
  } else if (novoModo === 'longa') {
    timerCircle.classList.add('mode-pausa-longa');
  } else {
    timerCircle.classList.add('mode-foco');
  }

  atualizarAnimacaoCirculo();
}

function atualizarAnimacaoCirculo() {
  const circleBar = document.getElementById('circle-bar');
  if (circleBar) {
    const tempoConsumido = MODOS[modoAtual].tempo - tempoRestante;
    const fracao = tempoConsumido / MODOS[modoAtual].tempo;
    const offset = CIRCLE_CIRCUMFERENCE * (1 - fracao);
    
    circleBar.style.strokeDashoffset = `${offset}`;
  }
}

function trocarAba(abaId, elementoBotao) {
  const conteudos = document.querySelectorAll('.conteudo-aba');
  conteudos.forEach(conteudo => {
    conteudo.classList.remove('active');
  });

  const botoes = document.querySelectorAll('.btn-tab');
  botoes.forEach(botao => {
    botao.classList.remove('active');
  });
  const abaSelecionada = document.getElementById(`aba-${abaId}`);
  if (abaSelecionada) {
    abaSelecionada.classList.add('active');
  }

  if (elementoBotao) {
    elementoBotao.classList.add('active');
  }
}

let modoAtual = 'foco';
let tempoRestante = MODOS.foco.tempo;
let timerInterval = null;
let emExecucao = false;

const timerDisplay = document.getElementById('timer-display');
const timerLabel = document.getElementById('timer-label');
const timerMensagem = document.getElementById('timer-mensagem');
const btnPlayPause = document.getElementById('btn-play-pause');

function atualizarDisplay() {
  const minutos = Math.floor(tempoRestante / 60).toString().padStart(2, '0');
  const segundos = (tempoRestante % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutos}:${segundos}`;
  
  atualizarAnimacaoCirculo();
}

function definirModo(modo) {
  pausarTimer();
  modoAtual = modo;
  tempoRestante = MODOS[modo].tempo;

  timerLabel.textContent = MODOS[modo].label;
  timerMensagem.textContent = MODOS[modo].mensagem;

  const botoes = document.querySelectorAll('.tab-botao button');
  botoes.forEach(btn => {
    btn.classList.remove('active', 'modo-curta', 'modo-longa');
  });

  const btnAtivo = document.getElementById(`btn-${modo}`);
  btnAtivo.classList.add('active');
  if (MODOS[modo].corClasse) {
    btnAtivo.classList.add(MODOS[modo].corClasse);
  }

  alterarModo(modo);
  
  atualizarDisplay();
}

function alternarTimer() {
  if (emExecucao) {
    pausarTimer();
  } else {
    iniciarTimer();
  }
}

function iniciarTimer() {
  emExecucao = true;
  btnPlayPause.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"/>
      <rect x="14" y="4" width="4" height="16"/>
    </svg>
  `;

  timerInterval = setInterval(() => {
    if (tempoRestante > 0) {
      tempoRestante--;
      atualizarDisplay();
    } else {
      pausarTimer();
      alert("Tempo finalizado!");
    }
  }, 1000);
}

function pausarTimer() {
  emExecucao = false;
  clearInterval(timerInterval);
  btnPlayPause.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  `;
}

function resetarTimer() {
  pausarTimer();
  tempoRestante = MODOS[modoAtual].tempo;
  atualizarDisplay();
}

// ===== LISTA DE TAREFAS =====
let tarefas = [];

function carregarTarefas() {
  const tarefasSalvas = localStorage.getItem('tarefas');
  if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);
    renderizarTarefas();
  }
}

function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function adicionarTarefa() {
  const input = document.getElementById('tarefa-input');
  const texto = input.value.trim();
  
  if (texto === '') {
    return;
  }
  
  const novaTarefa = {
    id: Date.now(),
    texto: texto,
    completa: false
  };
  
  tarefas.push(novaTarefa);
  salvarTarefas();
  renderizarTarefas();
  
  input.value = '';
  input.focus();
}

function deletarTarefa(id) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  salvarTarefas();
  renderizarTarefas();
}

function toggleTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.completa = !tarefa.completa;
    salvarTarefas();
    renderizarTarefas();
  }
}

function renderizarTarefas() {
  const lista = document.getElementById('tarefas-lista');
  const statusMensagem = document.querySelector('.status-tarefa');
  const badge = document.getElementById('badge-pendentes');
  
  lista.innerHTML = '';
  
  const tarefasPendentes = tarefas.filter(t => !t.completa).length;
  badge.textContent = `${tarefasPendentes} ${tarefasPendentes === 1 ? 'pendente' : 'pendentes'}`;
  
  if (tarefas.length === 0) {
    statusMensagem.style.display = 'flex';
  } else {
    statusMensagem.style.display = 'none';
  }
  
  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.className = `tarefa-item ${tarefa.completa ? 'completa' : ''}`;
    
    li.innerHTML = `
      <input type="checkbox" class="tarefa-checkbox" ${tarefa.completa ? 'checked' : ''} onchange="toggleTarefa(${tarefa.id})">
      <span class="tarefa-texto">${tarefa.texto}</span>
      <button class="tarefa-delete" onclick="deletarTarefa(${tarefa.id})" aria-label="Deletar tarefa">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    `;
    
    lista.appendChild(li);
  });
}

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.id === 'tarefa-input') {
    adicionarTarefa();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  alterarModo('foco');
  atualizarDisplay();
  carregarTarefas();
});