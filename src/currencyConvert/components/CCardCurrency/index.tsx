import * as React from 'react'
import { Link } from 'react-router-dom'

class CCardCurrency extends React.Component {

    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="mb-0">USD</h5>
                </div>
                <div className="card-body">
                    <h5 className="card-title">United State America</h5>
                    <Link to="/" className="btn btn-primary">Go</Link>
                </div>
            </div>
        )
    }
}

export default CCardCurrency