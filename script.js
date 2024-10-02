document.getElementById('form').addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('input[name="interesses[]"]:checked');
    const errorMessage = document.getElementById('error-message');

    // Limpa a mensagem de erro anterior
    errorMessage.textContent = '';

    // Verifica se pelo menos uma caixa de seleção está marcada
    if (checkboxes.length === 0) {
        errorMessage.textContent = 'Por favor, selecione pelo menos uma área de interesse.';
        event.preventDefault(); // Impede o envio do formulário
    }
});
