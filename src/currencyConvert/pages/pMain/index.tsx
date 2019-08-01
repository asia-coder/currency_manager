import * as React from 'react'
import CCardCurrency from '../../components/CCardCurrency'

class PageMain extends React.Component {

    render() {
        return (
            <div className="page-main">
                <h2 className="text-center mb-4">Currencies list</h2>

                <div className="row">
                    <div className="col-sm">
                        <CCardCurrency />
                    </div>
                    <div className="col-sm">
                        <CCardCurrency />
                    </div>
                    <div className="col-sm">
                        <CCardCurrency />
                    </div>
                    <div className="col-sm">
                        <CCardCurrency />
                    </div>
                </div>
            </div>
        )
    }
}

export default PageMain