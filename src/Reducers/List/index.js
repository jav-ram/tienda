export const list = (state = [], action) => {
    switch(action.type) {
        case 'PRODUCT_BUYED':
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
}
