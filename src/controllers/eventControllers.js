//exportando o módulo de accountService de services;
const accountService = require("../services/accountService");

//função para os eventos que vão ocorrer de acordo com o Test script
const handleEvent = (req, res) => {
  //extraindo os valores do corpo de requisição de body;
  const { type, origin, destination, amount } = req.body;

  //evento de deposit
  if (type === "deposit") {
    const account = accountService.deposit(destination, amount);
    return res.status(201).json({ destination: account });
  }

  //evento de withdraw
  if (type === "withdraw") {
    const account = accountService.withdraw(origin, amount);

    if (!account) {
      return res.status(404).json(0);
    }

    res.status(201).json({ origin: account });
  }

  //evento de transfer
  if (type === "transfer") {
    const account = accountService.transfer(origin, amount, destination);

    if (!account) {
      return res.status(404).json(0);
    }

    res.status(201).json({
      origin: account.origin,
      destination: account.destination,
    });
  }
};

module.exports = { handleEvent };
