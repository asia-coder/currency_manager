class CurrencyRequest {
  static readonly baseURL = "https://openexchangerates.org/api/";
  static readonly apiKey = 'cd6663bd88804186bcb378411ef33495';

  private static getRequestURL(action: string) {
    return CurrencyRequest.baseURL + action + `?app_id=${CurrencyRequest.apiKey}&prettyprint=true`
  }

  static async getAllCurrencies() {
    const action: string = 'latest.json';
    const url: string = CurrencyRequest.getRequestURL(action);
    const response = await fetch(url);

    return await response.json();
  }

  static async getAllCurrenciesFullName() {
    const action: string = 'currencies.json';
    const url: string = CurrencyRequest.getRequestURL(action);
    const response = await fetch(url);

    return await response.json();
  }
}

export default CurrencyRequest
