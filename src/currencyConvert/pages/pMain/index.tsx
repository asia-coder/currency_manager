import * as React from 'react'
import CurrencyRequest from '../../libs/CurrencyRequest'
import CCardCurrency from '../../components/CCardCurrency'

class PageMain extends React.Component {

  state = {
    error: null,
    currencies: [],
    userCurrency: '',
    isLoaded: false
  }

  componentDidMount() {
    const data = CurrencyRequest.getAllCurrencies();
    data
        .then(res => {
          this.setState({
            isLoaded: true,
            currencies: res.rates,
            userCurrency: res.base
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          })
        });
  }

  getItemList() {
    const { currencies } = this.state;
    const list: any = [];

    Object.entries(currencies).forEach(([key, value]) => {
      list.push(
        <div key={key} className="col-sm-3 mb-4">
          <CCardCurrency currencyName={key} currencyValue={value} />
        </div>
      );
    })

    return list;
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <div className="page-main">
        <h2 className="text-center mb-4">Currencies list</h2>

        {!isLoaded ? (
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
