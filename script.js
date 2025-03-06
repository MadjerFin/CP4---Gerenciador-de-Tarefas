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

