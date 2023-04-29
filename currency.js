class Currency{
    constructor(){
        this.url ="https://api.freecurrencyapi.com/v1/latest?apikey=URkRsQDJzbBndtRLtTKiGmBh23m4q6wAPPxqQVhh&base_currency="
    }

   async exchange(amount ,firstCurrency ,secondCurrency)
    {
    const response =  await  fetch(`${this.url}${firstCurrency}`) //altgr+noktalı virgül ile 
    const result = await response.json();
    const exchangedResult = amount*result.data[secondCurrency];

    return exchangedResult;
    }
}
