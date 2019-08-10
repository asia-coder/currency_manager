import * as React from 'react'
import CCardCurrency from '../../components/CCardCurrency'
import { Intent, Spinner } from "@blueprintjs/core";
import {inject, observer} from "mobx-react"

/*export interface IPropsCurrencies {
  currencyCollection: CurrencyCollection
}*/

@inject('currencyCollection')
@observer
class PageMain extends React.Component<any, any> {

  state = {
    isLoaded: false
  };

  getItemList() {
    const { currencyCollection } = this.props;
    const currenciesList = currencyCollection.getCollection;

    const list: any = [];

    for (let prop in currenciesList) {
      list.push(
        <div key={prop} className="col-sm-3 mb-4">
          <CCardCurrency {...currenciesList[prop]} />
        </div>
      );
    }

    return list;
  }

  render() {
    const { currencyCollection } = this.props;
    const isLoaded = currencyCollection.currenciesCount > 0;

    return (
      <div className="page-main">
        <h2 className="text-center mb-4">Currencies list [{currencyCollection.getCurrentCurrency}]</h2>

        {!isLoaded ? (
          <div className="text-center">
            <Spinner intent={Intent.PRIMARY}/>
          </div>
        ) : (
          <div className="row">

            {this.getItemList()}
          </div>
        )}
      </div>
    )
  }
}

export default PageMain
