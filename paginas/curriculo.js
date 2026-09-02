function toggleMenu() {
    const menu = document.getElementById('overlay-menu');
    if (menu) menu.classList.toggle('active');
}

// ===== DADOS DINÂMICOS =====
let formacoes = [];
let cursos = [];
let projetos = [];
let habilidades = [];

const CHAVE_ARMAZENAMENTO = 'curriculo_dados';

// Carrega dados do localStorage
function carregarDados() {
    const dados = localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (dados) {
        const parsed = JSON.parse(dados);
        formacoes = parsed.formacoes || [];
        cursos = parsed.cursos || [];
        projetos = parsed.projetos || [];
        habilidades = parsed.habilidades || [];
        
        // Restaura campos básicos
        ['inputNome', 'inputCargo', 'inputEmail', 'inputTelefone', 'inputCidade', 'inputLinkedin', 'inputGithub', 'inputObjetivo'].forEach(id => {
            const el = document.getElementById(id);
            if (el && parsed[id]) {
                el.value = parsed[id];
            }
        });

        renderizarFormacoes();
        renderizarCursos();
        renderizarProjetos();
        renderizarHabilidades();
        atualizarTodasAsPrevisoes();
    }
}

// Salva dados no localStorage
function salvarDados() {
    const dados = {
        inputNome: document.getElementById('inputNome').value,
        inputCargo: document.getElementById('inputCargo').value,
        inputEmail: document.getElementById('inputEmail').value,
        inputTelefone: document.getElementById('inputTelefone').value,
        inputCidade: document.getElementById('inputCidade').value,
        inputLinkedin: document.getElementById('inputLinkedin').value,
        inputGithub: document.getElementById('inputGithub').value,
        inputObjetivo: document.getElementById('inputObjetivo').value,
        formacoes: formacoes,
        cursos: cursos,
        projetos: projetos,
        habilidades: habilidades
    };
    localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(dados));
}

// ===== FORMAÇÕES =====
function adicionarFormacao() {
    const novaFormacao = {
        id: Date.now(),
        curso: '',
        instituicao: '',
        inicio: '',
        fim: ''
    };
    formacoes.push(novaFormacao);
    renderizarFormacoes();
}

function removerFormacao(id) {
    formacoes = formacoes.filter(f => f.id !== id);
    renderizarFormacoes();
    atualizarPreviewFormacoes();
    salvarDados();
}

function atualizarFormacao(id, campo, valor) {
    const formacao = formacoes.find(f => f.id === id);
    if (formacao) {
        formacao[campo] = valor;
        atualizarPreviewFormacoes();
        salvarDados();
    }
}

function renderizarFormacoes() {
    const container = document.getElementById('formacoes-lista');
    container.innerHTML = '';
    
    formacoes.forEach(formacao => {
        const div = document.createElement('div');
        div.className = 'item-dinamico-duplo';
        
        div.innerHTML = `
            <input type="text" placeholder="Curso" value="${formacao.curso}" onchange="atualizarFormacao(${formacao.id}, 'curso', this.value)" oninput="atualizarFormacao(${formacao.id}, 'curso', this.value)">
            <input type="text" placeholder="Instituição" value="${formacao.instituicao}" onchange="atualizarFormacao(${formacao.id}, 'instituicao', this.value)" oninput="atualizarFormacao(${formacao.id}, 'instituicao', this.value)">
            <input type="text" placeholder="Início (ano)" value="${formacao.inicio}" onchange="atualizarFormacao(${formacao.id}, 'inicio', this.value)" oninput="atualizarFormacao(${formacao.id}, 'inicio', this.value)">
            <input type="text" placeholder="Fim / Previsão" value="${formacao.fim}" onchange="atualizarFormacao(${formacao.id}, 'fim', this.value)" oninput="atualizarFormacao(${formacao.id}, 'fim', this.value)">
            <button type="button" class="btn-remover" onclick="removerFormacao(${formacao.id})" style="grid-column: 1 / -1;">✕</button>
        `;
        container.appendChild(div);
    });
}

// ===== CURSOS COMPLEMENTARES =====
function adicionarCurso() {
    const novoCurso = {
        id: Date.now(),
        nome: '',
        instituicao: ''
    };
    cursos.push(novoCurso);
    renderizarCursos();
}

function removerCurso(id) {
    cursos = cursos.filter(c => c.id !== id);
    renderizarCursos();
    atualizarPreviewCursos();
    salvarDados();
}

function atualizarCurso(id, campo, valor) {
    const curso = cursos.find(c => c.id === id);
    if (curso) {
        curso[campo] = valor;
        atualizarPreviewCursos();
        salvarDados();
    }
}

function renderizarCursos() {
    const container = document.getElementById('cursos-lista');
    container.innerHTML = '';
    
    cursos.forEach(curso => {
        const div = document.createElement('div');
        div.className = 'item-dinamico-duplo';
        
        div.innerHTML = `
            <input type="text" placeholder="Nome do curso" value="${curso.nome}" onchange="atualizarCurso(${curso.id}, 'nome', this.value)" oninput="atualizarCurso(${curso.id}, 'nome', this.value)">
            <input type="text" placeholder="Instituição / plataforma" value="${curso.instituicao}" onchange="atualizarCurso(${curso.id}, 'instituicao', this.value)" oninput="atualizarCurso(${curso.id}, 'instituicao', this.value)">
            <button type="button" class="btn-remover" onclick="removerCurso(${curso.id})" style="grid-column: 1 / -1;">✕</button>
        `;
        container.appendChild(div);
    });
}

// ===== PROJETOS ESCOLARES =====
function adicionarProjeto() {
    const novoProjeto = {
        id: Date.now(),
        titulo: '',
        descricao: ''
    };
    projetos.push(novoProjeto);
    renderizarProjetos();
}

function removerProjeto(id) {
    projetos = projetos.filter(p => p.id !== id);
    renderizarProjetos();
    atualizarPreviewProjetos();
    salvarDados();
}

function atualizarProjeto(id, campo, valor) {
    const projeto = projetos.find(p => p.id === id);
    if (projeto) {
        projeto[campo] = valor;
        atualizarPreviewProjetos();
        salvarDados();
    }
}

function renderizarProjetos() {
    const container = document.getElementById('projetos-lista');
    container.innerHTML = '';
    
    projetos.forEach(projeto => {
        const div = document.createElement('div');
        div.className = 'item-dinamico-duplo';
        
        div.innerHTML = `
            <input type="text" placeholder="Título do projeto" value="${projeto.titulo}" onchange="atualizarProjeto(${projeto.id}, 'titulo', this.value)" oninput="atualizarProjeto(${projeto.id}, 'titulo', this.value)" style="grid-column: 1 / -1;">
            <textarea placeholder="O que era, sua função e o que aprendeu" onchange="atualizarProjeto(${projeto.id}, 'descricao', this.value)" oninput="atualizarProjeto(${projeto.id}, 'descricao', this.value)" style="grid-column: 1 / -1; min-height: 60px; resize: vertical;">${projeto.descricao}</textarea>
            <button type="button" class="btn-remover" onclick="removerProjeto(${projeto.id})" style="grid-column: 1 / -1;">✕</button>
        `;
        container.appendChild(div);
    });
}

// ===== HABILIDADES =====
function adicionarHabilidade() {
    const novaHabilidade = {
        id: Date.now(),
        nome: ''
    };
    habilidades.push(novaHabilidade);
    renderizarHabilidades();
}

function removerHabilidade(id) {
    habilidades = habilidades.filter(h => h.id !== id);
    renderizarHabilidades();
    atualizarPreviewHabilidades();
    salvarDados();
}

function atualizarHabilidade(id, valor) {
    const habilidade = habilidades.find(h => h.id === id);
    if (habilidade) {
        habilidade.nome = valor;
        atualizarPreviewHabilidades();
        salvarDados();
    }
}

function renderizarHabilidades() {
    const container = document.getElementById('habilidades-lista');
    container.innerHTML = '';
    
    habilidades.forEach(habilidade => {
        const div = document.createElement('div');
        div.className = 'item-dinamico';
        
        div.innerHTML = `
            <input type="text" placeholder="Ex: Comunicação, HTML, Python..." value="${habilidade.nome}" onchange="atualizarHabilidade(${habilidade.id}, this.value)" oninput="atualizarHabilidade(${habilidade.id}, this.value)">
            <button type="button" class="btn-remover" onclick="removerHabilidade(${habilidade.id})">✕</button>
        `;
        container.appendChild(div);
    });
}

// ===== ATUALIZAÇÕES DE PREVIEW =====
function atualizarContatos() {
    const email = document.getElementById('inputEmail').value || 'email@exemplo.com';
    const tel = document.getElementById('inputTelefone').value || '(00) 00000-0000';
    const cid = document.getElementById('inputCidade').value || 'Cidade/UF';
    const linkedin = document.getElementById('inputLinkedin').value;
    const github = document.getElementById('inputGithub').value;
    
    let contato = `${email}`;
    if (tel) contato += ` • ${tel}`;
    if (cid) contato += ` • ${cid}`;
    if (linkedin || github) contato += '\n';
    if (linkedin) contato += `linkedin.com/${linkedin} `;
    if (github) contato += `github.com/${github}`;
    
    document.getElementById('pContatos').textContent = contato;
    salvarDados();
}

function atualizarPreviewFormacoes() {
    const preview = document.getElementById('pFormacao');
    if (formacoes.length === 0) {
        preview.textContent = 'Sua formação acadêmica ou técnica.';
    } else {
        let html = '';
        formacoes.forEach(f => {
            if (f.curso) {
                html += `<strong>${f.curso}</strong>`;
                if (f.instituicao) html += ` - ${f.instituicao}`;
                if (f.inicio || f.fim) html += ` (${f.inicio}${f.inicio && f.fim ? ' a ' : ''}${f.fim})`;
                html += '<br>';
            }
        });
        preview.innerHTML = html || 'Sua formação acadêmica ou técnica.';
    }
}

function atualizarPreviewCursos() {
    const preview = document.getElementById('pCursos');
    if (cursos.length === 0) {
        preview.textContent = 'Seus cursos complementares aparecerão aqui.';
    } else {
        let html = '';
        cursos.forEach(c => {
            if (c.nome) {
                html += `<strong>${c.nome}</strong>`;
                if (c.instituicao) html += ` (${c.instituicao})`;
                html += '<br>';
            }
        });
        preview.innerHTML = html || 'Seus cursos complementares aparecerão aqui.';
    }
}

function atualizarPreviewProjetos() {
    const preview = document.getElementById('pProjetos');
    if (projetos.length === 0) {
        preview.textContent = 'Seus projetos escolares aparecerão aqui.';
    } else {
        let html = '';
        projetos.forEach(p => {
            if (p.titulo) {
                html += `<strong>${p.titulo}</strong>`;
                if (p.descricao) html += `<br><em>${p.descricao}</em>`;
                html += '<br><br>';
            }
        });
        preview.innerHTML = html || 'Seus projetos escolares aparecerão aqui.';
    }
}

function atualizarPreviewHabilidades() {
    const preview = document.getElementById('pHabilidades');
    if (habilidades.length === 0) {
        preview.textContent = 'Suas principais competências e conhecimentos.';
    } else {
        const nomes = habilidades.map(h => h.nome).filter(n => n);
        preview.textContent = nomes.join(' • ') || 'Suas principais competências e conhecimentos.';
    }
}

function atualizarTodasAsPrevisoes() {
    atualizarContatos();
    atualizarPreviewFormacoes();
    atualizarPreviewCursos();
    atualizarPreviewProjetos();
    atualizarPreviewHabilidades();
}

// Atualização da Prévia em tempo real - campos básicos
const campos = [
    { input: 'inputNome', prev: 'pNome', default: 'Seu Nome' },
    { input: 'inputCargo', prev: 'pCargo', default: 'Cargo Desejado' },
    { input: 'inputObjetivo', prev: 'pObjetivo', default: 'Seu resumo profissional aparecerá aqui.' }
];

campos.forEach(c => {
    const el = document.getElementById(c.input);
    if (el) {
        el.addEventListener('input', (e) => {
            document.getElementById(c.prev).textContent = e.target.value || c.default;
            salvarDados();
        });
    }
});

['inputEmail', 'inputTelefone', 'inputCidade', 'inputLinkedin', 'inputGithub'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', atualizarContatos);
});

// ===== EXPORTAR PDF =====
function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nome = document.getElementById('inputNome').value || 'Seu Nome';
    const cargo = document.getElementById('inputCargo').value || 'Cargo';
    const email = document.getElementById('inputEmail').value || '';
    const tel = document.getElementById('inputTelefone').value || '';
    const cidade = document.getElementById('inputCidade').value || '';
    const linkedin = document.getElementById('inputLinkedin').value || '';
    const github = document.getElementById('inputGithub').value || '';
    const objetivo = document.getElementById('inputObjetivo').value || '';

    // Barra superior colorida
    doc.setFillColor(122, 106, 243);
    doc.rect(0, 0, 210, 8, 'F');

    // Cabeçalho
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(30, 21, 72);
    doc.text(nome, 20, 25);

    doc.setFontSize(12);
    doc.setTextColor(122, 106, 243);
    doc.text(cargo, 20, 33);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    let linhaContatos = email;
    if (tel) linhaContatos += ` | ${tel}`;
    if (cidade) linhaContatos += ` | ${cidade}`;
    doc.text(linhaContatos, 20, 40);
    
    if (linkedin || github) {
        let y = 45;
        let contatos = '';
        if (linkedin) contatos += `linkedin.com/${linkedin}`;
        if (github) contatos += (contatos ? ' | ' : '') + `github.com/${github}`;
        doc.text(contatos, 20, y);
        y += 5;
    }

    let y = 55;

    // Seção Objetivo
    if (objetivo) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("OBJETIVO PROFISSIONAL", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        const splitObj = doc.splitTextToSize(objetivo, 170);
        doc.text(splitObj, 20, y);
        y += (splitObj.length * 5) + 10;
    }

    // Seção Formações
    const formacoeValidas = formacoes.filter(f => f.curso);
    if (formacoeValidas.length > 0) {
        if (y > 260) {
            doc.addPage();
            y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("FORMAÇÃO", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        
        formacoeValidas.forEach(formacao => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            let texto = `${formacao.curso}`;
            if (formacao.instituicao) texto += ` - ${formacao.instituicao}`;
            if (formacao.inicio || formacao.fim) texto += ` (${formacao.inicio}${formacao.inicio && formacao.fim ? ' a ' : ''}${formacao.fim})`;
            doc.text(texto, 25, y);
            y += 5;
        });
        y += 5;
    }

    // Seção Cursos Complementares
    const cursosValidos = cursos.filter(c => c.nome);
    if (cursosValidos.length > 0) {
        if (y > 260) {
            doc.addPage();
            y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("CURSOS COMPLEMENTARES", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        
        cursosValidos.forEach(curso => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            let texto = `${curso.nome}`;
            if (curso.instituicao) texto += ` (${curso.instituicao})`;
            doc.text(texto, 25, y);
            y += 5;
        });
        y += 5;
    }

    // Seção Projetos Escolares
    const projetosValidos = projetos.filter(p => p.titulo);
    if (projetosValidos.length > 0) {
        if (y > 260) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("PROJETOS ESCOLARES", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        
        projetosValidos.forEach(projeto => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            
            doc.setTextColor(30, 21, 72);
            doc.text(`${projeto.titulo}`, 25, y);
            y += 5;
            
            if (projeto.descricao) {
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(50, 50, 50);
                const splitDesc = doc.splitTextToSize(projeto.descricao, 160);
                doc.text(splitDesc, 25, y);
                y += (splitDesc.length * 4) + 3;
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
            } else {
                y += 3;
            }
        });
        y += 5;
    }

    // Seção Habilidades
    const habilidadesValidas = habilidades.filter(h => h.nome);
    if (habilidadesValidas.length > 0) {
        if (y > 260) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("HABILIDADES", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        const textoHabilidades = habilidadesValidas.map(h => h.nome).join(' • ');
        const splitHab = doc.splitTextToSize(textoHabilidades, 170);
        doc.text(splitHab, 20, y);
    }

    doc.save(`curriculo_${nome.toLowerCase().replace(/\s+/g, '_')}.pdf`);
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarDados();
    atualizarTodasAsPrevisoes();
});