//Importação do módulo de accountService;
const accountService = require("../services/accountService");

const getBalance = (req, res) => {
  //extraindo o valor de account_id da query String da requisição;
  //GET /balance?account_id=1234 = "1234"
  const { account_id } = req.query;

  const account = accountService.getAccount(account_id);

  if (!account) {
    return res.status(404).json(0);
  }

  res.status(200).json(account.balance);
};

module.exports = { getBalance };
