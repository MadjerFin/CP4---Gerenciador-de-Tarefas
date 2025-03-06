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

