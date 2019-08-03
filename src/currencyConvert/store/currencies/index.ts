import {observable, computed, action, toJS} from 'mobx';
import CurrencyRequest from '../../libs/CurrencyRequest';

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

  constructor() {
    this.getRequestCurrencies();
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