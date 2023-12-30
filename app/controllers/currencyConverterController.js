const currencyConverterService = require("../services/currencyConverterService");

exports.getCryptoCurrencies = async (req, res) => {
  const response = await currencyConverterService.getCryptoCurrencies();
  if(response) {
    res.json(response);
  } else {
    res.json({ status: 500, data: null, message: "some thing went wrong!" });
  }
};

exports.getCryptoConverterAmount = async (req, res) => {
    const response = await currencyConverterService.getCryptoConverterAmount(req.body);
    if(response) {
      res.json(response);
    } else {
      res.json({ status: 500, data: null, message: "some thing went wrong!" });
    }
  };
