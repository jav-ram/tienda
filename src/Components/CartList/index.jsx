import React from 'react';
import './index.css';

export const List = ({
    list
}) => {
    console.log(list);
    return(
        <ul className="itemlist">{
            list.map((item) => {

                return (
                    <li className="item" key={item.id}>
                        <div className="cont name"> {item.name} </div>
                        <div className="cont price"> {`Q ${item.price}`} </div>
                    </li>
                );

            })
        }</ul>
    )
}