export const stock = (state = [], action) => {
    switch(action.type) {
        case 'PRODUCT_ADDED':
            return [
                ...state,
                {
                    ...action.payload,
                    id: state.length,
                },
            ];
        case 'PRODUCT_SOLD':
            //id
            const id = action.payload;
            //item a cambiar
            const item = state[id];

            return [
                ...state.slice(0, id),
                {
                    ...item,
                    quantity: (item.quantity - 1),
                },
                ...state.slice(id+1, state.length),
            ];
        default:
            return state;
    }
}