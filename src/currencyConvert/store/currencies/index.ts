import {observable, computed, action, toJS} from 'mobx';
import CurrencyRequest from '../../libs/CurrencyRequest';
import StoreService from '../../libs/storage';

class Currency {
    id: string;
    title: string;
    amount: number;
    fullName: string;

    constructor(currencyName: any, currencyAmount: any, currencyFullName: any) {
        this.id = currencyName;
        this.title = currencyName;
        this.amount = currencyAmount;
        this.fullName = currencyFullName;
    }

    @computed
    get getAmount() {
        return this.amount;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }
}


class CurrencyCollection {
  @observable currencies = new Map();

  @observable currenciesFullNames = new Map();

  @observable currentCurrency: string = '';

  constructor() {
    if (!StoreService.hasCurrentCurrency()) {
      StoreService.setCurrentCurrency('UZS');
    }

    if (!StoreService.hasCurrenciesFullName) {
      this.getRequestCurrenciesFullNames();
    } else {
      const currenciesFullNames: object = StoreService.getCurrenciesFullName;
      this.setFullNamesCollections(currenciesFullNames);
    }

    const currentCurrency: string = StoreService.getCurrentCurrency();
    this.setCurrentCurrency(currentCurrency);

    this.getRequestCurrencies();
  }

  @action
  setCurrentCurrency(currency: string) {
    this.currentCurrency = currency.toUpperCase();
  }

  @computed
  get getCurrentCurrency() {
    return this.currentCurrency;
  }

  getCurrency(id: string) {
      return this.currencies.get(id);
  }

  @computed
  get getCollection() {
    return toJS(this.currencies);
  }

  @computed
  get currenciesCount() {
      return this.currencies.size;
  }

  @action
  getRequestCurrencies() {
    const data = CurrencyRequest.getAllCurrencies();

    data.then(res => {
      this.setCollections(res.rates);
    });
  }

  getRequestCurrenciesFullNames() {
    const data = CurrencyRequest.getAllCurrenciesFullName();

    data.then(res => {
      this.setFullNamesCollections(res);
      StoreService.setCurrenciesFullName(JSON.stringify(this.getFullNamesCollection));
    });
  }

  @action
  setFullNamesCollections(currenciesFullNames: any) {
    let currenciesArray = new Map();

    Object.entries(currenciesFullNames).forEach(([key, value]) => {
      currenciesArray.set(key, value);
    });

    this.currenciesFullNames = currenciesArray;
  }

  @computed
  get getFullNamesCollection() {
    return this.currenciesFullNames;
  }

  @action
  setCollections(currencies: any) {
    let currenciesArray = new Map();

    Object.entries(currencies).forEach(([key, value]) => {
      currenciesArray.set(key, new Currency(key, value, key));
    });

    this.currencies = currenciesArray;
  }
}

const currencyCollection = new CurrencyCollection();

export default currencyCollection;
export { currencyCollection };
