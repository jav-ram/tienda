import React from 'react';
import './index.css';

export const StockList = (
    {stock, onClicked}
) => {
    return(
        <ul className="itemlist">{
            stock.map( (item) => {
                
                return (
                    <li className="item" key={item.id}>
                        <div className="cont name"> {item.name} </div>
                        <div className="cont price"> {`Q ${item.price}`} </div>
                        <div className="cont quantity"> {item.quantity} </div>
                        <button disabled={item.quantity !== 0 ? false : true }  onClick={
                            () => {onClicked(item.id, item.name, item.price)}
                        } className="cont add"> ADD </button>
                    </li>
                );
            } )
        }</ul>
    )
}
