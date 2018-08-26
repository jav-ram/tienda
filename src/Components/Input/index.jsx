import React from 'react';
import './index.css';

export const AddForm = ({
    onAddClicked
}) => (
    <div >
        <label> Nombre </label>
        <input ref={node => {
          this.name = node;
        }} />
        <label> Precio </label>
        <input ref={node => {
          this.price = node;
        }} />
        <label> Cantidad </label>
        <input ref={node => {
          this.quantity = node;
        }} />

        <button type="submit" onClick={() => {
            onAddClicked(this.name.value, this.price.value, this.quantity.value);
        } }> Ingresar </button>
    </div>
);