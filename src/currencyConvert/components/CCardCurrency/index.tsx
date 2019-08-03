import * as React from 'react'
import { Link } from 'react-router-dom'

class CCardCurrency extends React.Component<any, any> {

  render() {
    return (
      <div className="card text-center">
        <div className="row p-2 align-items-center">
          <div className="col-sm">
            <h5 className="mb-0">{this.props.title}</h5>
          </div>
          <div className="col-sm">
            =
          </div>
          <div className="col-sm">
            <h6 className="mb-0">{this.props.amount}</h6>
          </div>
        </div>
        <Link to="/convert" className="btn btn-primary m-2">Convert to</Link>
      </div>
    )
  }
}

export default CCardCurrency
