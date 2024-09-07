function pesquisarAutores() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Por favor, digite um nome válido.</p>";
        return;
    }

    let resultados = "";

    for (let autor of autores) {
        let nome = autor.nome.toLowerCase();
        let descricao = autor.descricao.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h3><mark class="destaque-amarelo">${autor.nome}</mark></h3>
                    <p class="descricao-meta">${autor.descricao}</p>
                    <a href="${autor.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não existe um autor cadastrado no nosso clube com esse nome.</p>";
    }

    section.innerHTML = resultados;
}

function pesquisarEdicoesAnteriores() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Por favor, digite um mês válido.</p>";
        return;
    }

    let resultados = "";

    for (let edicao of edicoesAnteriores) {
        let mes = edicao.mes.toLowerCase();

        if (mes.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h3><mark class="destaque-amarelo">${edicao.mes}</mark></h3>
                    <p class="descricao-meta">${edicao.titulo}</p>
                    <p class="descricao-meta">${edicao.editora}</p>
                    <p class="descricao-meta">${edicao.informacoes}</p>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>O mês escolhido não está cadastrado no nosso clube.</p>";
    }

    section.innerHTML = resultados;
}

document.getElementById('cart-button').addEventListener('click', function() {
    alert('Apenas para demonstração. Não é o foco do projeto.');
});

document.querySelectorAll('.card-button-3').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Apenas para demonstração. Não é o foco do projeto.');
    });
});

document.querySelectorAll('.button-demonstracao').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Apenas para demonstração. Não é o foco do projeto.');
    });
});




