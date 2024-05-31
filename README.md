# Protótipo de Casa Inteligente: Estudo Simples com ESP8266

Este projeto é um estudo simples sobre como criar um protótipo de casa inteligente utilizando o módulo ESP8266. O objetivo é explorar como uma única placa pode ser utilizada para controlar dispositivos em uma residência de forma remota, proporcionando uma introdução prática aos conceitos de automação residencial.

## Tecnologias Utilizadas:
- ESP8266 e Arduino IDE: O dispositivo de controle é um módulo ESP8266 programado utilizando a Arduino IDE. O ESP8266 se conecta à rede Wi-Fi doméstica e recebe comandos do servidor sobre o estado dos dispositivos controlados.
- Servidor em Node.js: Um servidor simples é implementado em Node.js utilizando o framework Express.js. Ele fornece uma rota para enviar comandos para o ESP8266, permitindo que o dispositivo atualize o estado dos dispositivos na casa.
- Front-end: Uma interface web básica foi desenvolvida para permitir que o usuário interaja com o sistema. Utilizando tecnologias como HTML, CSS e JavaScript, a interface permite ao usuário ligar ou desligar dispositivos na casa de forma intuitiva e fácil de usar.

## Componentes Utilizados
- ESP8266 (NodeMCU)
- LEDs
- Resistores (220 ohms)
- Jumpers
- Protoboard

## Funcionamento:

- O usuário interage com a interface web, enviando comandos para ligar ou desligar dispositivos na casa.
- Quando o usuário faz uma alteração, o servidor recebe o comando e envia uma mensagem para o ESP8266 utilizando o protocolo HTTP.
- O ESP8266 recebe a mensagem e atualiza o estado dos dispositivos conforme necessário.
- Os dispositivos controlados (como LEDs) respondem de acordo com os comandos recebidos do ESP8266.

## Conclusão:

Este estudo oferece uma visão prática sobre como a tecnologia ESP8266 pode ser utilizada para criar protótipos de automação residencial de forma simples e eficaz. Ao incluir uma interface web, torna-se mais fácil para os usuários interagirem com o sistema, proporcionando uma experiência mais completa e satisfatória. Embora seja um projeto básico, ele oferece uma introdução valiosa aos conceitos fundamentais de casa inteligente e pode servir como ponto de partida para projetos mais avançados no futuro.
