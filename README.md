# gsheets-stock

Obtenha preços de ações da Bovespa em planilhas do Google Sheets.

A função `STOCK_PRICES()` recebe um range de strings como parâmetro (código de cada ação) e devolve um array (preços).

![google sheets](https://user-images.githubusercontent.com/4885447/77269416-94241980-6c87-11ea-9640-e86717620a9c.gif)

Basta copiar o código do arquivo `main.js` no Editor de Script do Google Sheets e utilizar a função `STOCK_PRICES()`.

## Disclaimer

Este código utiliza a API do [AlphaAdvantage](https://www.alphavantage.co/) que limita as requisições a 5 por minuto. 
Por isso é necessário mais de uma API key para mais de 5 ações.
