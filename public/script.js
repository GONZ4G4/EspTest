// Função assíncrona para alternar o estado de um LED
async function toggleLed(ledIndex) {
    try {
        // Faz uma requisição para a rota `/toggle/:id` do servidor, onde `ledIndex` é o ID do LED
        const response = await fetch(`/toggle/${ledIndex}`);
        // Espera a resposta da requisição e obtém o texto da resposta
        const result = await response.text();
        // Exibe o resultado no console (indica se o LED está ligado ou desligado)
        console.log(result);
    } catch (error) {
        // Se ocorrer um erro durante a requisição, exibe uma mensagem de erro no console
        console.error('Erro ao alterar estado do LED:', error);
    }
}
