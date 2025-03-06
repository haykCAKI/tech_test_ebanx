# Olá! 👋

Meu nome é **Herick Akio Yoshii Kumata**, e esse é o meu teste técnico para a vaga de **Software Engineer Jr** na **EBANX**.

---

## 📋 Descrição do Projeto

Este projeto é uma API simples desenvolvida em **Node.js** para simular operações bancárias básicas, como depósito, saque e transferência entre contas. A API foi construída seguindo as especificações fornecidas no teste técnico.

---

## 🛠 Tecnologias Utilizadas

- **Linguagem**: JavaScript
- **Runtime**: Node.js
- **Formato de Dados**: JSON
- **Framework**: Express
- **Bibliotecas**: 
  - `express`: Para criar o servidor e gerenciar rotas.
  - `body-parser`: Para processar o corpo das requisições em JSON.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 14 ou superior).
- NPM para gerenciar dependências.

## Passos para Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/haykCAKI/tech_test_ebanx.git
    ```

### Instale as dependências:


```bash
  npm install -y
```
```bash
  npm install express
```

### Inicie o servidor:
```bash
node index.js
```
# 🛑 Caso Encontre Erros
## Se ocorrer algum erro ao executar o projeto, siga os passos abaixo:

### Verifique se o express está instalado:
```bash
npm install express
```
### Se o package.json não existir, crie um:
```bash
npm init -y
```
### Reinstale as dependências:
```bash
npm install
```
# 📂 Estrutura do Projeto

```bash
  /ebanx_api
    /src
      /controllers
        balanceControllers.js
        eventControllers.js
        resetControllers.js
      /routes
        routes.js
      /services
        accountService.js
  index.js
  
```
# 🧪 Testes
## Antes de realizar os testes automatizados, utilizei o Postman para verificar se as rotas e os retornos estavam de acordo com o solicitado. Todos os endpoints foram testados manualmente para garantir o funcionamento correto.

## Casos de Teste
### Resetar o estado inicial:

## POST /event
### Criar uma conta com saldo inicial:
``` bash
    {
      "type": "deposit",
      "destination": "100",
      "amount": 10
    }
```
## POST /event
### Realizar um depósito em uma conta existente:
``` bash
    {
      "type": "deposit",
      "destination": "100",
      "amount": 10
    }
```
## GET /balance
### GET /balance?account_id=100
### Consultar o saldo de uma conta:
```bash
  http://localhost:3000/balance?account_id=100
```

## Realizar um saque:
### POST /event
```bash
  {
  "type": "withdraw",
  "origin": "100",
  "amount": 5
}
```
## POST /event
### Realizar uma transferência entre contas:
```bash
    {
    "type": "transfer",
    "origin": "100",
    "amount": 15,
    "destination": "300"
  }
```

#📝 Considerações Finais
## Documentação no Código: 
### Todos os arquivos estão devidamente comentados para facilitar o entendimento da lógica implementada.

## Testes Automatizados: 
#### Utilizei o site ipkiss.pragmazero.com para validar os testes automatizados.

## 🙌 Agradecimentos
Agradeço à equipe da EBANX pela oportunidade de participar deste processo seletivo. Espero que este projeto atenda às expectativas e demonstre minhas habilidades como desenvolvedor.
