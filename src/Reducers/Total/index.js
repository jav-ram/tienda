export const total = (state = 0, action) => {

    switch(action.type) {
        case 'TOTAL_UPDATED':
            return parseFloat(state) + parseFloat(action.payload);
        default:
            return state;
    }
    
}