// questão1: Array para armazenar tarefas com tarefa inicial usando spread
let tarefas = [
    { ...{ id: 1, titulo: 'Tarefa inicial de exemplo', concluida: false } }
];


// Capturando elementos do DOM
const formTarefa = document.getElementById('formTarefa');
const entradaTarefa = document.getElementById('entradaTarefa');
const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');
const botaoFiltrarPendentes = document.getElementById('botaoFiltrarPendentes');
const botaoMostrarTodas = document.getElementById('botaoMostrarTodas');


// questão2: Evento para capturar o valor do input e criar nova tarefa
formTarefa.addEventListener('submit', (evento) => {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    evento.preventDefault();
    
    const titulo = entradaTarefa.value.trim();
    
    if (titulo) {
        // Criação de nova tarefa
        const novaTarefa = {
            id: Date.now(),
            titulo: titulo,
            concluida: false
        };
        
        // Adicionar ao array
        tarefas.push(novaTarefa);
        
        // Questão 3: Alert informando que a tarefa foi adicionada
        alert('Tarefa adicionada com sucesso!');
        
        // Limpar input
        entradaTarefa.value = '';
        
        // Atualizar a lista de tarefas
        renderizarTarefas();
        
    
    }
});

// questão4: Usar forEach para iterar sobre o array e exibir tarefas
function renderizarTarefas(tarefasParaRenderizar = tarefas) {
    listaTarefas.innerHTML = '';
    
    tarefasParaRenderizar.forEach(tarefa => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        
        if (tarefa.concluida) {
            li.classList.add('task-completed');
        }
        
        li.innerHTML = `
            <span>${tarefa.titulo}</span>
            <div>
                <button class="complete-btn" data-id="${tarefa.id}">
                    ${tarefa.concluida ? 'Desmarcar' : 'Concluir'}
                </button>
                <button class="delete-btn" data-id="${tarefa.id}">Excluir</button>
                <button class="info-btn" data-id="${tarefa.id}">Info</button>
            </div>
        `;
        
        listaTarefas.appendChild(li);
    });
}



// questão5: Botão "Concluir" para alterar propriedade concluida
// + Funcionalidade de excluir e mostrar info
listaTarefas.addEventListener('click', (e) => {
    const idTarefa = parseInt(e.target.dataset.id);
    
    // Botão de Concluir
    if (e.target.classList.contains('complete-btn')) {
        // Alterar a propriedade concluida
        tarefas = tarefas.map(tarefa => 
            tarefa.id === idTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
        
        renderizarTarefas();
        // Demonstrar uso de reduce após alterar estado
        calcularTarefasConcluidas();
    }
    
    // Botão de Excluir
    if (e.target.classList.contains('delete-btn')) {
        // Usando splice para remover a tarefa
        const indice = tarefas.findIndex(tarefa => tarefa.id === idTarefa);
        if (indice !== -1) {
            tarefas.splice(indice, 1);
            renderizarTarefas();
        }
    }
    
    // Botão de Info (para demonstrar destructuring)
    if (e.target.classList.contains('info-btn')) {
        // Questão 9: Destructuring para obter titulo e concluida
        extrairInfoTarefa(idTarefa);
    }
});


// questão6: Filter para mostrar apenas tarefas não concluídas
botaoFiltrarPendentes.addEventListener('click', () => {
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
    renderizarTarefas(tarefasPendentes);
});

// Botão para mostrar todas as tarefas
botaoMostrarTodas.addEventListener('click', () => {
    renderizarTarefas();
});



// questão7: Map para criar lista com títulos em maiúsculas
obterTitulosTarefasEmMaiusculas();
function obterTitulosTarefasEmMaiusculas() {
    const titulosEmMaiusculas = tarefas.map(tarefa => tarefa.titulo.toUpperCase());
    console.log('Títulos em maiúsculas:', titulosEmMaiusculas);
    return titulosEmMaiusculas;
}



// questão8: Reduce para calcular total de tarefas concluídas
function calcularTarefasConcluidas() {
    const totalConcluidas = tarefas.reduce((total, tarefa) => 
        tarefa.concluida ? total + 1 : total, 0
    );
    
    // Usando every e some para demonstração adicional
    const todasConcluidas = tarefas.every(tarefa => tarefa.concluida);
    const algumaConcluida = tarefas.some(tarefa => tarefa.concluida);
    
    alert(`Total de tarefas concluídas: ${totalConcluidas}\nTodas concluídas: ${todasConcluidas}\nAlguma concluída: ${algumaConcluida}`);
}


// questão9: Destructuring para extrair informações de tarefa
function extrairInfoTarefa(idTarefa) {
    const tarefa = tarefas.find(t => t.id === idTarefa);
    
    if (tarefa) {
        // Usando destructuring para extrair propriedades
        const { titulo, concluida } = tarefa;
        alert(`Tarefa: ${titulo}\nStatus: ${concluida ? 'Concluída' : 'Pendente'}`);
    }
}

// questão10: Função que aceita parâmetros e cria uma tarefa
function criarTarefa(titulo, categoria = 'Geral') {
    if (!titulo || titulo.trim() === '') {
        alert('O título da tarefa não pode ser vazio!');
        return null;
    }

    const novaTarefa = {
        id: Date.now(),
        titulo: titulo,
        concluida: false,
        categoria: categoria,
        dataCriacao: new Date().toLocaleDateString()
    };

    tarefas.push(novaTarefa);
    renderizarTarefas();
    return novaTarefa;
}
