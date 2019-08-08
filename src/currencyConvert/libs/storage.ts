class StorageService {
  static setCurrentCurrency(currency: string): void {
    localStorage.setItem('user_currency', currency.toUpperCase());
  }

  static getCurrentCurrency(): string {
    return String(localStorage.getItem('user_currency'));
  }

  static hasCurrentCurrency(): boolean {
    return !!localStorage.getItem('user_currency');
  }
}

export default StorageService;