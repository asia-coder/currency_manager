import * as React from 'react'
import {inject, observer} from "mobx-react";
import { Intent, Spinner, MenuItem, Button } from "@blueprintjs/core";
import { Select, ItemRenderer, ItemPredicate } from "@blueprintjs/select";

export interface ICurrencies {
  title: string;
  text: string;
}

const currencies: ICurrencies[] = [
  { title: 'UZS', text: 'Uzbekistan' },
  { title: 'USD', text: 'United State' },
  { title: 'RUB', text: 'Russia' },
];

export const renderCurrency: ItemRenderer<ICurrencies> = (currency, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${currency.title}.`;
  return (
    <MenuItem
      label={currency.text.toString()}
      key={currency.title}
    />
  );
};

export const filterCurrency: ItemPredicate<ICurrencies> = (query, currency, _index, exactMatch) => {
  const normalizedTitle = currency.title.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (exactMatch) {
    return normalizedTitle === normalizedQuery;
  } else {
    return `${currency.title}. ${normalizedTitle} ${currency.text}`.indexOf(normalizedQuery) >= 0;
  }
};

export const currencySelectProps = {
  itemPredicate: filterCurrency,
  itemRenderer: renderCurrency,
  items: currencies,
};

@inject('currencyCollection')
@observer
class PageConvert extends React.Component<any, any> {

  changeSelect = () => {

  };

  render() {
    const { currencyCollection } = this.props;
    const isLoaded = currencyCollection.currenciesCount > 0;

    const CurrencySelect = Select.ofType<ICurrencies>();

    return (
      <div className="page-convert">
        <h2 className="text-center">Convert currency</h2>

        {!isLoaded ? (
          <div className="text-center">
            <Spinner intent={Intent.PRIMARY} />
          </div>
        ) : (
          <div className="row">
            <CurrencySelect
              items={currencySelectProps.items}
              itemPredicate={currencySelectProps.itemPredicate}
              itemRenderer={currencySelectProps.itemRenderer}
              noResults={<MenuItem disabled={true} text="No results." />}
              onItemSelect={this.changeSelect}
            >
              <Button text={currencySelectProps.items[0].text} rightIcon="double-caret-vertical" />
            </CurrencySelect>
          </div>
        )}
      </div>
    )
  }
}

export default PageConvert
