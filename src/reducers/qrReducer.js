
export default (state = 'QR Chef', action) => {
    switch(action.type){
        case 'SET_QR':
            return action.payload;
        default:
            return state;
    }
}