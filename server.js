// Importa o módulo express para criar um aplicativo web
const express = require('express');
// Cria uma instância do aplicativo express
const app = express();
// Define a porta na qual o servidor vai rodar
const port = 3000;

// Array que mantém o estado de cinco LEDs, inicialmente todos desligados (false)
let ledStates = [false, false, false, false, false];

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para obter o estado atual de todos os LEDs como uma string de 0s e 1s
app.get('/estado-string', (req, res) => {
  // Converte o array de estados dos LEDs para uma string de 0s e 1s
  const ledString = ledStates.map(state => state ? '1' : '0').join('');
  // Responde com a string de estados dos LEDs
  res.send(ledString);
});

// Rota para alternar o estado de um LED específico identificado pelo ID
app.get('/toggle/:id', (req, res) => {
  // Obtém o ID do LED a partir dos parâmetros da URL e converte para inteiro
  const id = parseInt(req.params.id, 10);
  // Verifica se o ID é válido (dentro do intervalo do array de estados)
  if (id >= 0 && id < ledStates.length) {
    // Alterna o estado do LED (de true para false ou de false para true)
    ledStates[id] = !ledStates[id];
    // Responde com uma mensagem indicando o novo estado do LED
    res.send(`LED ${id} está agora ${ledStates[id] ? 'ligado' : 'desligado'}`);
    var lig = ledStates[id];
    if (lig == true) {
      lig = 'ligado';
    } else if (lig == false){
      lig = 'desligado';
    } else {lig = 'não está funcionando'}
    console.log(`led ` + id + ` ` + lig);
  } else {
    // Se o ID for inválido, responde com um erro 400 (Bad Request)
    res.status(400).send('ID inválido');
  }
});

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Manipulador de erros global para exceções não tratadas
process.on('uncaughtException', (err) => {
  // Exibe a mensagem de erro no console
  console.error('Exceção não tratada:', err);
});

// Manipulador de erros global para promessas rejeitadas não tratadas
process.on('unhandledRejection', (reason, promise) => {
  // Exibe a mensagem de erro no console
  console.error('Rejeição não tratada:', promise, 'razão:', reason);
});
