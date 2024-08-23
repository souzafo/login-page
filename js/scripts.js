document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenha os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Login bem-sucedido!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Usuário ou senha incorretos.';
    }
});
