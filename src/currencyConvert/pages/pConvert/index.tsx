import * as React from 'react'
import {inject, observer} from "mobx-react";
import { Intent, Spinner, MenuItem, Button } from "@blueprintjs/core";
import { Select, ItemRenderer, ItemPredicate } from "@blueprintjs/select";
import {toJS} from "mobx";

export interface ICurrencies {
  title: string;
  fullName: string;
}

const currencies: ICurrencies[] = [];

export const renderCurrency: ItemRenderer<ICurrencies> = (currency, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
      return null;
  }

  const text = currency.fullName;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={currency.title}
      text={text}
      key={currency.title}
    />
  );
};

export const filterCurrency: ItemPredicate<ICurrencies> = (query, currency) => {
  const normalizedTitle = currency.title.toLowerCase();
  const normalizedText = currency.fullName.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  return `${normalizedTitle} ${normalizedText}`.indexOf(normalizedQuery) !== -1;
};

export const currencySelectProps = {
  itemPredicate: filterCurrency,
  itemRenderer: renderCurrency,
  items: currencies,
};

@inject('currencyCollection')
@observer
class PageConvert extends React.Component<any, any> {

  getItemList() {
    const { currencyCollection } = this.props;
    const currenciesList = currencyCollection.getCollection;
    const currenciesFullNamesList = toJS(currencyCollection.getFullNamesCollection);

    for (let prop in currenciesList) {
      currencySelectProps.items.push({
        title: currenciesList[prop]['title'],
        fullName: currenciesFullNamesList[prop]
      });
    }
  }

  changeSelect = () => {

  };

  render() {
    const { currencyCollection } = this.props;
    const isLoaded = currencyCollection.currenciesCount > 0;
    const CurrencySelect = Select.ofType<ICurrencies>();
    this.getItemList();

    return (
      <div className="page-convert">
        <h2 className="text-center">Convert currency</h2>

        {!isLoaded ? (
          <div className="text-center">
            <Spinner intent={Intent.PRIMARY} />
          </div>
        ) : (
            <div className="row">
              <div className="col-6 d-flex">
                <CurrencySelect
                    items={currencySelectProps.items}
                    itemPredicate={currencySelectProps.itemPredicate}
                    itemRenderer={currencySelectProps.itemRenderer}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.changeSelect}
                >
                    <Button text={currencySelectProps.items[0].fullName} rightIcon="double-caret-vertical" />
                </CurrencySelect>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <CurrencySelect
                    items={currencySelectProps.items}
                    itemPredicate={currencySelectProps.itemPredicate}
                    itemRenderer={currencySelectProps.itemRenderer}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.changeSelect}
                >
                    <Button text={currencySelectProps.items[0].fullName} rightIcon="double-caret-vertical" />
                </CurrencySelect>
              </div>
            </div>
        )}
      </div>
    )
  }
}

export default PageConvert
