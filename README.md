# Olá! 👋

Meu nome é **Herick Akio Yoshii Kumata**, e esse é o meu teste técnico para a vaga de **Software Engineer Jr** na **EBANX**.

---

## 👋 Descrição do Projeto

Este projeto é uma API simples desenvolvida em **Node.js** para simular operações bancárias básicas, como depósito, saque e transferência entre contas. A API foi construída seguindo as especificações fornecidas no teste técnico.

---

## 🛠️ Tecnologias Utilizadas

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
- NPM ou Yarn para gerenciar dependências.

### Passos para Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/haykCAKI/tech_test_ebanx.git
   ```
2. **Instale as dependências**:
   ```bash
   npm install -y
   ```
3. **Instale as dependências**:
   ```bash
   npm install express
   ```
4. **Inicie o servidor**:
   ```bash
   node index.js
   ```
---

## 🌐 Expondo o Servidor com Ngrok

Para testar a API em ambientes externos, utilizei o Ngrok.

### Passos para Usar o Ngrok

1. **Instale o Ngrok**:

   - Baixe e instale o Ngrok a partir do site oficial: [https://ngrok.com/download](https://ngrok.com/download).

2. **Inicie o Ngrok**:

   ```bash
   ngrok http 3000
   ```

3. **Obtenha o Link Público**:

   - O Ngrok gerará um link público, como `https://abcd1234.ngrok.io`. Use esse link para acessar a API.

4. **Teste no Ambiente Externo**:

   - No site `ipkiss.pragmazero.com`, insira o link do Ngrok seguido da rota `/event`, por exemplo:
     ```
     https://abcd1234.ngrok.io/event
     ```

---

## 🛡️ Caso Encontre Erros

Se ocorrer algum erro ao executar o projeto, siga os passos abaixo:

- Verifique se o express está instalado:
  ```bash
  npm install express
  ```
- Se o `package.json` não existir, crie um:
  ```bash
  npm init -y
  ```
- Reinstale as dependências:
  ```bash
  npm install
  ```

---

## 📚 Estrutura do Projeto

```
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

---

## 🧪 Testes

Todos os endpoints foram testados manualmente com o Postman e validados no site `ipkiss.pragmazero.com`.

### Casos de Teste

1. **Resetar o estado inicial**:
   ```http
   POST /reset
   ```
2. **Criar uma conta com saldo inicial**:
   ```json
   {
     "type": "deposit",
     "destination": "100",
     "amount": 10
   }
   ```
3. **Consultar saldo**:
   ```http
   GET /balance?account_id=100
   ```
4. **Realizar um saque**:
   ```json
   {
     "type": "withdraw",
     "origin": "100",
     "amount": 5
   }
   ```
5. **Transferência entre contas**:
   ```json
   {
     "type": "transfer",
     "origin": "100",
     "amount": 15,
     "destination": "300"
   }
   ```

---
Agradeço à equipe da **EBANX** pela oportunidade de participar deste processo seletivo. Espero que este projeto atenda às expectativas e demonstre minhas habilidades como desenvolvedor.

