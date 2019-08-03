import * as React from 'react'
import CCardCurrency from '../../components/CCardCurrency'
import {inject, observer} from "mobx-react";

@inject('currencyCollection')
@observer
class PageMain extends React.Component<any, any> {

  state = {
    userCurrency: '',
    isLoaded: false
  };

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {

  }

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
    const isLoaded = false;

    return (
      <div className="page-main">
        <h2 className="text-center mb-4">Currencies list</h2>

        {isLoaded ? (
          <div className="text-center">Loading...</div>
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
