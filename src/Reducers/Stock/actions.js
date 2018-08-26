export const addProduct = (name, price, quantity) => ({
    type: 'PRODUCT_ADDED',
    payload: {
        name,
        price,
        quantity,
    },
});

export const sellProduct = (id) => ({
    type: 'PRODUCT_SOLD',
    payload: id,
});