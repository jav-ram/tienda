import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

//importar actioners
import { addProduct, sellProduct } from './Reducers/Stock/actions';
import { buyProduct } from './Reducers/List/actions';

//import reducers
import { stock } from './Reducers/Stock';
import { list } from './Reducers/List';

//import app
import { StoreApp } from './Components/StoreApp';

//combine reducers
const reducer = combineReducers({
    stock,
    list,
});

//create store
const store = createStore(reducer);

//connects
const VisibleStoreApp = connect(
    state => ({
        stock: state.stock,
    }),
    dispatch => ({
        onAddClicked: (name, price, quantity) => {
            dispatch(addProduct(name, price, quantity));
        },
    }),
  )(StoreApp);

//pruebas
store.dispatch({
    type: 'PRODUCT_ADDED',
    payload: {
        name: 'papa',
        price: 1.50,
        quantity: 100,
    }
});



store.dispatch(
    buyProduct(1)
);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <VisibleStoreApp />
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();
