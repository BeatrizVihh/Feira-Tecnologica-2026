function toggleMenu() {
    const menu = document.getElementById('overlay-menu');
    if (menu) menu.classList.toggle('active');
}

// Atualização da Prévia em tempo real
const campos = [
    { input: 'inputNome', prev: 'pNome', default: 'Seu Nome' },
    { input: 'inputCargo', prev: 'pCargo', default: 'Cargo Desejado' },
    { input: 'inputObjetivo', prev: 'pObjetivo', default: 'Seu resumo profissional aparecerá aqui.' },
    { input: 'inputFormacao', prev: 'pFormacao', default: 'Sua formação acadêmica ou técnica.' },
    { input: 'inputHabilidades', prev: 'pHabilidades', default: 'Suas principais competências.' }
];

campos.forEach(c => {
    const el = document.getElementById(c.input);
    if (el) {
        el.addEventListener('input', (e) => {
            document.getElementById(c.prev).textContent = e.target.value || c.default;
        });
    }
});

// Atualizar contatos
function atualizarContatos() {
    const email = document.getElementById('inputEmail').value || 'email@exemplo.com';
    const tel = document.getElementById('inputTelefone').value || '(00) 00000-0000';
    const cid = document.getElementById('inputCidade').value || 'Cidade/UF';
    document.getElementById('pContatos').textContent = `${email} • ${tel} • ${cid}`;
}

['inputEmail', 'inputTelefone', 'inputCidade'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', atualizarContatos);
});

// Exportar PDF via jsPDF
function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nome = document.getElementById('inputNome').value || 'Seu Nome';
    const cargo = document.getElementById('inputCargo').value || 'Cargo';
    const email = document.getElementById('inputEmail').value || '';
    const tel = document.getElementById('inputTelefone').value || '';
    const cidade = document.getElementById('inputCidade').value || '';
    const objetivo = document.getElementById('inputObjetivo').value || '';
    const formacao = document.getElementById('inputFormacao').value || '';
    const habilidades = document.getElementById('inputHabilidades').value || '';

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
    doc.text(`${email} | ${tel} | ${cidade}`, 20, 40);

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

    // Seção Formação
    if (formacao) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("FORMAÇÃO", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        const splitForm = doc.splitTextToSize(formacao, 170);
        doc.text(splitForm, 20, y);
        y += (splitForm.length * 5) + 10;
    }

    // Seção Habilidades
    if (habilidades) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(30, 21, 72);
        doc.text("HABILIDADES", 20, y);
        doc.line(20, y + 2, 190, y + 2);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        const splitHab = doc.splitTextToSize(habilidades, 170);
        doc.text(splitHab, 20, y);
    }

    doc.save(`curriculo_${nome.toLowerCase().replace(/\s+/g, '_')}.pdf`);
}