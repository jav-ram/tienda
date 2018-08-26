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
        default:
            return state;
    }
}