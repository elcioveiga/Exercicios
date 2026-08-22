const campo = document.querySelector('#tarefa');
const botao = document.querySelector('#adicionar');
const lista = document.querySelector('#lista');

function adicionarTarefa() {
    const texto = campo.value.trim();
    if (!texto) return;
    const item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
    campo.value = '';
    campo.focus();
}

botao.addEventListener('click', adicionarTarefa);
campo.addEventListener('keydown', (evento) => {
   if(evento.key === 'Enter') adicionarTarefa();
})