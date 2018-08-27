export const buyProduct = (name, price, quantity) => ({
    type: 'PRODUCT_BUYED',
    payload: {
        name, 
        price
    }
});
