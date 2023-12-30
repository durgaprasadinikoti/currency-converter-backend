
const axios = require('axios');

const apiKey = 'f4a68fb5-e5f5-4b9a-bb19-11d742037280';

exports.getCryptoCurrencies = async() => {
    let response = null;
    try {
       const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': apiKey,
        },
      });
      if(response) {
        const data = response.data;
        if (data.status.error_code === 0) {
            const responseData = data.data.map( item => ({name: item.name, symbol: item.symbol,supportedCurrencies: getSupportedCurrencies(item.quote) }) )
            return responseData;
        } 
        return response;
      }
    }
    catch(error) {
        console.log(error);
        response = null;
        console.error(response);
    }
  };

  exports.getCryptoConverterAmount = async() => {
    let response = null;
    const cryptoSymbol = 'BTC';
    const fiatCurrency = 'USD';
    const customAmount = 100; 
    try {
        const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
        const response = await axios.get(apiUrl, {
            headers: {
              'X-CMC_PRO_API_KEY': apiKey,
            },
        });

        if(response) {
            const data = response.data;
            if (data.status.error_code === 0) {
                const responseData = data.data.find( item => item.symbol ===  cryptoSymbol);
                const quote = responseData.quote[fiatCurrency];
                const price = quote.price;
                const equivalentAmount = customAmount * price;
                const result = `${customAmount} ${cryptoSymbol} = ${equivalentAmount} ${fiatCurrency}`;
                console.log(`1 ${cryptoSymbol} = ${price} ${fiatCurrency}`);
                return result;
              } else {
                console.error('Error fetching exchange rate:', data.status.error_message);
              }
        }
    }
    catch(error) {
        console.log(error);
        response = null;
        console.error(response);
    }
  };

  const getSupportedCurrencies = (quote) => {
    console.log(quote);
    const currencyList = [];
    for(let key in quote) {
        currencyList.push(key);
    }
    return currencyList;
}
