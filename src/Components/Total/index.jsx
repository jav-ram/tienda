import React from 'react';
import './index.css';

export const Total = ({
    total
}) => {
    return (
        <h1 className="" > { `Q: ${total}` } </h1>
    );
}