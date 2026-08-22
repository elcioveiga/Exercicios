function filtrarExercicios() {
    const termoBusca = document.getElementById('searchInput').value.toLowerCase();
    const itens = document.querySelectorAll('#exerciciosList li');

    itens.forEach(item => {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(termoBusca)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}