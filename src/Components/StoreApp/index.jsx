import React from 'react';
import './index.css';

//import componentes
import { StockList } from '../StockList';
import { AddForm } from '../Input';

export class StoreApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return(
            <div>
                <StockList {...this.props}  />
                <AddForm {...this.props} />
            </div>
        );
    }
}