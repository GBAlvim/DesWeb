document.getElementById('formulario').addEventListener('submit', function(event) {
    var usuario = document.getElementById('Usuario').value;
    var senha = document.getElementById('Senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    // Verifica se os campos estão vazios
    if (usuario.trim() === '' || senha.trim() === '') {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.'; // Exibe uma mensagem de erro
        event.preventDefault(); // Impede o envio padrão do formulário
    } else {
        mensagemErro.textContent = ''; // Limpa a mensagem de erro
    }
});