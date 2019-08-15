class StorageService {

  private static setStorageItem(fieldName: string, fieldValue: any): void {
    localStorage.setItem(fieldName, fieldValue);
  }

  private static getStorageItem(fieldName: string): any {
    return localStorage.getItem(fieldName);
  }

  static  setCurrentCurrency(currency: string): void {
    this.setStorageItem('user_currency', currency.toUpperCase());
  }

  static getCurrentCurrency(): string {
    return String(this.getStorageItem('user_currency'));
  }

  static hasCurrentCurrency(): boolean {
    return !!this.getStorageItem('user_currency');
  }

  static setCurrenciesFullName(currenciesNames: any): void {
    this.setStorageItem('currencies_full_names', currenciesNames);
  }

  static get getCurrenciesFullName(): object {
    return this.getStorageItem('currencies_full_names');
  }

  static get hasCurrenciesFullName(): boolean {
    return !!this.getCurrenciesFullName;
  }
}

export default StorageService;
