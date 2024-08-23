document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenha os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação
    if (username === 'admin' && password === 'password') {
        // Redirecionar para a página de sucesso
        window.location.href = 'success.html';
    } else {
        // Mostrar mensagem de erro
        document.getElementById('message').textContent = 'Usuário ou senha incorretos.';
    }
});
