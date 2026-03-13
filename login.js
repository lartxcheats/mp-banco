const authenticateBtn = document.getElementById('authenticateBtn');

// Função para autenticar com Face ID
function authenticateWithFaceID() {
    authenticateBtn.classList.add('scanning');
    authenticateBtn.disabled = true;
    
    // Simula autenticação (2 segundos)
    setTimeout(() => {
        authenticateBtn.classList.remove('scanning');
        
        // Redireciona para o app
        setTimeout(() => {
            window.location.href = 'mp.html';
        }, 300);
    }, 2000);
}

// Evento de clique no botão Face ID
authenticateBtn.addEventListener('click', authenticateWithFaceID);

// Auto-trigger Face ID ao carregar (opcional)
window.addEventListener('load', () => {
    // Descomente a linha abaixo para ativar Face ID automaticamente
    // setTimeout(authenticateWithFaceID, 1000);
});
