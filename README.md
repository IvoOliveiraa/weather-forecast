# 🌤️ Aplicativo de Previsão do Tempo

Este é um projeto simples de previsão do tempo usando **HTML**, **CSS** e **JavaScript puro**, com consumo da API da [OpenWeatherMap](https://openweathermap.org/). O usuário digita o nome da cidade e recebe informações como temperatura, clima atual, umidade e vento. Também é possível alternar entre modo claro e escuro.

## 🚀 Funcionalidades

- Busca de cidade por nome
- Exibição de:
  - Nome da cidade
  - Temperatura (°C)
  - Descrição do clima
  - Ícone do clima
  - Umidade (%)
  - Velocidade do vento (km/h)
- Modo escuro (dark mode) com toggle
- Salvamento do tema preferido no `localStorage`

## 💡 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap Icons (via CDN)
- API OpenWeatherMap

## 🔧 Como usar

1. Clone ou baixe este repositório.
2. Obtenha uma chave da OpenWeatherMap [clicando aqui](https://openweathermap.org/api).
3. Substitua o valor da constante `apiKey` no arquivo `script.js`:

```javascript
const apiKey = "SUA_CHAVE_AQUI";
