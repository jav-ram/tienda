import React from 'react';
import './index.css';

export const StockList = (
    {stock}
) => {
    console.log(stock)
    return(
        <ul>{
            stock.map( (item) => {
                
                return (
                    <li key={item.id}>
                        {item.name}
                    </li>
                );
            } )
        }</ul>
    )
}
