document.getElementById('salvarNota').addEventListener('click', function() {
    const notaInput = document.getElementById('notaInput');
    const notaTexto = notaInput.value.trim();

    if (notaTexto) {
        const listaNotas = document.getElementById('listaNotas');
        const novaNota = document.createElement('li');
        novaNota.textContent = notaTexto;
        listaNotas.appendChild(novaNota); // Insere na lista
        
        notaInput.value = ''; // Limpa o campo de texto
    } else {
        // Campo sem texto, retorna erro
        alert('Anotação sem conteúdo. Por favor, faça uma anotação para que ela seja salva!');
    }
});
