
// ==========================================
// DADOS DAS 15 REDAÇÕES
// ==========================================

// SUBSTITUA OS TÍTULOS E OS TEXTOS PELOS SEUS.

const redacoes = [

    {
        numero: "01",
        titulo: "Título da primeira redação",
        categoria: "Dissertativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA PRIMEIRA REDAÇÃO.`
    },

    {
        numero: "02",
        titulo: "Título da segunda redação",
        categoria: "Argumentativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA SEGUNDA REDAÇÃO.`
    },

    {
        numero: "03",
        titulo: "Título da terceira redação",
        categoria: "Reflexiva",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA TERCEIRA REDAÇÃO.`
    },

    {
        numero: "04",
        titulo: "Título da quarta redação",
        categoria: "Narrativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA QUARTA REDAÇÃO.`
    },

    {
        numero: "05",
        titulo: "Título da quinta redação",
        categoria: "Dissertativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA QUINTA REDAÇÃO.`
    },

    {
        numero: "06",
        titulo: "Título da sexta redação",
        categoria: "Argumentativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA SEXTA REDAÇÃO.`
    },

    {
        numero: "07",
        titulo: "Título da sétima redação",
        categoria: "Reflexiva",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA SÉTIMA REDAÇÃO.`
    },

    {
        numero: "08",
        titulo: "Título da oitava redação",
        categoria: "Narrativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA OITAVA REDAÇÃO.`
    },

    {
        numero: "09",
        titulo: "Título da nona redação",
        categoria: "Dissertativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA NONA REDAÇÃO.`
    },

    {
        numero: "10",
        titulo: "Título da décima redação",
        categoria: "Argumentativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA REDAÇÃO.`
    },

    {
        numero: "11",
        titulo: "Título da décima primeira redação",
        categoria: "Reflexiva",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA PRIMEIRA REDAÇÃO.`
    },

    {
        numero: "12",
        titulo: "Título da décima segunda redação",
        categoria: "Narrativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA SEGUNDA REDAÇÃO.`
    },

    {
        numero: "13",
        titulo: "Título da décima terceira redação",
        categoria: "Dissertativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA TERCEIRA REDAÇÃO.`
    },

    {
        numero: "14",
        titulo: "Título da décima quarta redação",
        categoria: "Argumentativa",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA QUARTA REDAÇÃO.`
    },

    {
        numero: "15",
        titulo: "Título da décima quinta redação",
        categoria: "Reflexiva",
        ano: "2026",
        descricao: "Adicione uma breve descrição sobre o tema desta produção.",
        texto: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA QUINTA REDAÇÃO.`
    }

];


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const redacoesGrid = document.getElementById("redacoesGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const resultsCount = document.getElementById("resultsCount");

const modal = document.getElementById("redacaoModal");

const modalTitle = document.getElementById("modalTitle");

const modalCategory = document.getElementById("modalCategory");

const modalMeta = document.getElementById("modalMeta");

const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


// ==========================================
// CRIAÇÃO DOS CARDS
// ==========================================

function mostrarRedacoes(lista) {

    redacoesGrid.innerHTML = "";

    resultsCount.textContent =
        `${lista.length} redação(ões) disponível(is)`;

    if (lista.length === 0) {

        redacoesGrid.innerHTML = `
            <div class="no-results">
                Nenhuma redação encontrada.
                Tente outra pesquisa.
            </div>
        `;

        return;
    }

    lista.forEach(redacao => {

        const card = document.createElement("article");

        card.className = "redacao-card";

        const numero = document.createElement("span");
        numero.className = "card-number";
        numero.textContent = redacao.numero;

        const categoria = document.createElement("span");
        categoria.className = "card-category";
        categoria.textContent = redacao.categoria.toUpperCase();

        const titulo = document.createElement("h3");
        titulo.textContent = redacao.titulo;

        const descricao = document.createElement("p");
        descricao.className = "card-description";
        descricao.textContent = redacao.descricao;

        const botao = document.createElement("button");
        botao.className = "read-button";
        botao.textContent = "Ler redação →";

        botao.addEventListener("click", () => {
            abrirRedacao(redacao);
        });

        card.append(
            numero,
            categoria,
            titulo,
            descricao,
            botao
        );

        redacoesGrid.appendChild(card);

    });

}


// ==========================================
// PESQUISA DE REDAÇÕES
// ==========================================

function filtrarRedacoes() {

    const pesquisa = searchInput.value
        .toLowerCase()
        .trim();

    const categoriaSelecionada = categoryFilter.value;

    const resultado = redacoes.filter(redacao => {

        const correspondePesquisa =
            redacao.titulo.toLowerCase().includes(pesquisa) ||
            redacao.descricao.toLowerCase().includes(pesquisa) ||
            redacao.categoria.toLowerCase().includes(pesquisa);

        const correspondeCategoria =
            categoriaSelecionada === "Todas" ||
            redacao.categoria === categoriaSelecionada;

        return correspondePesquisa && correspondeCategoria;

    });

    mostrarRedacoes(resultado);

}

searchInput.addEventListener("input", filtrarRedacoes);

categoryFilter.addEventListener("change", filtrarRedacoes);


// ==========================================
// ABRIR REDAÇÃO NO MODAL
// ==========================================

function abrirRedacao(redacao) {

    modalTitle.textContent = redacao.titulo;

    modalCategory.textContent = redacao.categoria.toUpperCase();

    modalMeta.textContent =
        `Produção textual nº ${redacao.numero} | ${redacao.ano}`;

    modalText.textContent = redacao.texto;

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    closeModal.focus();

}


// ==========================================
// FECHAR MODAL
// ==========================================

function fecharRedacao() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}

closeModal.addEventListener("click", fecharRedacao);


// Fechar ao clicar fora da janela

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        fecharRedacao();
    }

});


// Fechar utilizando a tecla ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.classList.contains("active")) {
        fecharRedacao();
    }

});


// ==========================================
// MENU PARA CELULARES
// ==========================================

menuToggle.addEventListener("click", () => {

    const menuAberto = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.textContent = menuAberto ? "✕" : "☰";

});


// Fechar o menu depois de clicar em um link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// ==========================================
// INICIALIZAÇÃO DO SITE
// ==========================================

// Exibe as 15 redações quando a página é aberta.

mostrarRedacoes(redacoes);

console.log("Site Minha Jornada carregado com sucesso!");
console.log(`${redacoes.length} redações cadastradas.`);
