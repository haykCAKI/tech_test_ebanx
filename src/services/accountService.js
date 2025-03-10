let accounts = {};

// GET/balance
//Caso não exista, retorne nulo;
const getAccount = (id) => accounts[id] || null;

// POST/events
// POST/events: type="deposit";
/**
 *
 * (Requisição)
 * {
 *  "type": "deposit", // type
 *  "id": "100", // ID da conta
 *  "amount": 10 // ID valor a ser depositado
 * }
 *
 * (Resposta)
 * {
 *  "destination": {
 *      "id": "100", //ID da conta destino
 *      "balance": 10 //Novo saldo da conta destino
 *   },
 * }
 */
const deposit = (id, amount) => {
  //caso for "false", ele retorna uma conta nova adicionado um saldo de zero;
  if (!accounts[id]) {
    accounts[id] = { id, balance: 0 };
  }

  //Caso "true", vai ser adicionado o valor dentro do ID
  accounts[id].balance += amount;

  //Atualiza a conta;
  return accounts[id];
};

// POST/events: type="withdraw";
/**
 * (Requisição)
 * {
 *  "type": "withdraw", //type
 *  "origin": "100", //ID da conta origin
 *  "amount": 5 //quando vai ser sacado
 * }
 *
 * (Resposta)
 * {
 *   "origin": {
 *      "id": "100", // Id conta origin
 *      "balance": 5 //Novo saldo da conta origin
 *  }
 * }
 *
 */
const withdraw = (id, amount) => {
  // caso exista uma conta e se o saldo da conta for menor
  if (!accounts[id] || accounts[id].balance < amount) {
    return null;
  }

  // caso exista, vai ser sacado da conta
  accounts[id].balance -= amount;

  //atualiza a conta
  return accounts[id];
};

// POST/event: type="transfer"
/**
 * (Requisição)
 * {
 *  "type": "transfer", // type
 *  "origin": "100", // Conta origin
 *  "amount": 15, //Valor da transferencia
 *  "destination": "300", //Destinatário
 * }
 *
 * (Resposta)
 * {
 *   "origin": {
 *      "id": "100",
 *      "balance": 0
 *  },
 *   "destination": {
 *      "id": "300",
 *      "balance": 15
 *  },
 * }
 *
 */
const transfer = (originId, amount, destinationId) => {
  //Verificando se a conta existe e se existe a possibilidade de ter uma transação
  if (
    !accounts[originId] ||
    accounts[originId].balance < amount ||
    accounts[originId].balance < 0
  ) {
    return null;
  }

  //Verificando se a conta haverá uma transação
  if (!accounts[destinationId]) {
    accounts[destinationId] = { id: destinationId, balance: 0 };
  }

  //Conta da Origin
  accounts[originId].balance -= amount;

  //Conta Destinatário
  accounts[destinationId].balance += amount;

  //Atualização dos Saldos
  return {
    origin: {
      id: originId,
      balance: accounts[originId].balance,
    },
    destination: {
      id: destinationId,
      balance: accounts[destinationId].balance,
    },
  };
};

// POST/reset
const reset = () => {
  accounts = {};
};

//importando os módulos de accountService
module.exports = {
  getAccount,
  deposit,
  withdraw,
  transfer,
  reset,
};
