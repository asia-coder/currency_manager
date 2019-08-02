class CurrencyRequest {
  static readonly baseURL = "https://openexchangerates.org/api/"
  static readonly apiKey = 'cd6663bd88804186bcb378411ef33495'

  private static getRequestURL(action: string) {
    return CurrencyRequest.baseURL + action + `?app_id=${CurrencyRequest.apiKey}&prettyprint=true`
  }

  static async getAllCurrencies() {
    const url: string = CurrencyRequest.getRequestURL('latest.json');
    const response = await fetch(url);
    const data: any = await response.json();

    return data;
  }
}

export default CurrencyRequest
