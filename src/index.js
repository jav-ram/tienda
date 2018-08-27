import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

//importar actioners
import { addProduct, sellProduct } from './Reducers/Stock/actions';
import { buyProduct } from './Reducers/List/actions';
import { updateTotal } from './Reducers/Total/actions';

//import reducers
import { stock } from './Reducers/Stock';
import { list } from './Reducers/List';
import { total } from './Reducers/Total';

//import app
import { StockList } from './Components/StockList';
import { AddForm } from './Components/Input';
import { List } from './Components/CartList';
import { Total } from './Components/Total';

//combine reducers
const reducer = combineReducers({
    stock,
    list,
    total,
});

//create store
const store = createStore(reducer);

//connects
    //StockList
const VisibleStockList = connect(
    state => ({
        stock: state.stock,
    }), 
    dispatch => ({
        onClicked: (id, name, price, quantity) => {

            // le quito un valor a la cantidad
            dispatch(sellProduct(id));
            // agrego a lista
            dispatch(buyProduct(name, price));
            // actualizar 
            dispatch(updateTotal(price));

        }
    }), 
) (StockList)
    //Input
const VisibleInput = connect(
    null,
    dispatch => ({
        onAddClicked: (name, price, quantity) => {
            dispatch(addProduct(name, price, quantity));
        },
    }),
)(AddForm);
    //cartList
const VisibleList = connect(
    state => ({
        list: state.list,
    }),
    null,
)(List);
    //total
const VisibleTotal = connect(
    state => ({
        total: state.total,
    }), 
    null,
)(Total);

//pruebas
store.dispatch({
    type: 'PRODUCT_ADDED',
    payload: {
        name: 'a',
        price: 1.50,
        quantity: 100,
    }
});
store.dispatch({
    type: 'PRODUCT_ADDED',
    payload: {
        name: 'b',
        price: 1.50,
        quantity: 100,
    }
});
store.dispatch({
    type: 'PRODUCT_ADDED',
    payload: {
        name: 'c',
        price: 1.50,
        quantity: 100,
    }
});

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <div className="lists">
                <VisibleStockList className="" />
                <VisibleList className="" />
            </div>
            <div className="card">
                <VisibleTotal />
                <VisibleInput />
            </div>            
        </div>
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();
