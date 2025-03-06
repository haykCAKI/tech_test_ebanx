//Importação do módulo de accountService;
const accountService = require("../services/accountService");

const getBalance = (req, res) => {
  //extraindo o valor de account_id da query String da requisição;
  const { account_id } = req.query;

  //importando o id de accounts[id]
  const account = accountService.getAccount(account_id);

  //Resposta de 404 0 caso não exista
  if (!account) {
    return res.status(404).json(0);
  }

  //Caso Exista: 200 valor do balance
  res.status(200).json(account.balance);
};

//Importação do módulo de getBalance
module.exports = { getBalance };
