const axios = require('axios');

exports.handler = async () => {

  let temp = {};
  try {
    const response = await axios.get('https://random.dog/woof.json', { json: true });
    const quote = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes', { json: true });
  
    temp = {
        image: response.data.url,
        quote: quote.data[0]
    }
    return {
      statusCode: 200,
      body: JSON.stringify(temp),
    };
  }
  catch (error) {
    console.log(error.response.body);
  }

};

