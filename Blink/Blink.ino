#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "Gozanga_2G";
const char* password = "E31102310";
const char* serverAddress = "http://192.168.1.5:3000/estado-string"; // Rota atualizada para receber a string de 0s e 1s

#define LED0 D4
#define LED1 D3
#define LED2 D2
#define LED3 D1
#define LED4 D0

bool leds[5] = {LOW, LOW, LOW, LOW, LOW}; // Array para armazenar o estado de cada LED
String previousLedString = ""; // String para armazenar o estado anterior dos LEDs

void setup() {
  Serial.begin(115200); // Inicia a comunicação serial para debug
  pinMode(LED0, OUTPUT);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);

  // Conecta-se à rede Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  // Faz uma requisição GET para o servidor para obter o estado atual dos LEDs como uma string de 0s e 1s
  WiFiClient client;
  HTTPClient http;
  http.begin(client, serverAddress);
  int httpResponseCode = http.GET();

  if (httpResponseCode == 200) { // Se a requisição for bem-sucedida
    String ledString = http.getString(); // Obtém a string de 0s e 1s do servidor
    
    // Verifica se houve mudança na string de estado dos LEDs
    if (ledString != previousLedString) {
      // Atualiza o estado de cada LED com base na nova string recebida
      for (int i = 0; i < 5; i++) {
        leds[i] = (ledString[i] == '1') ? HIGH : LOW; // Converte cada caractere da string para HIGH ou LOW
      }

      // Define o estado de todos os LEDs de uma vez
      digitalWrite(LED0, leds[0]);
      digitalWrite(LED1, leds[1]);
      digitalWrite(LED2, leds[2]);
      digitalWrite(LED3, leds[3]);
      digitalWrite(LED4, leds[4]);

      // Debug: Imprime o estado de cada LED
      Serial.println("LEDs atualizados:");
      for (int i = 0; i < 5; i++) {
        Serial.print("LED");
        Serial.print(i);
        Serial.print(": ");
        Serial.println(leds[i] ? "HIGH" : "LOW");
      }

      // Atualiza a string de estado anterior
      previousLedString = ledString;
    } else {
      Serial.println("Sem mudança nos LEDs.");
    }
  } else {
    Serial.print("Error on HTTP request: ");
    Serial.println(httpResponseCode);
  }

  http.end();

  // Aguarda um pouco antes de fazer a próxima requisição (para não sobrecarregar o servidor)
  delay(500);
}
