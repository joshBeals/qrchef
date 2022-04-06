
export default (state = [], action) => {
    switch(action.type){
        case 'SET_QR':
            return action.payload;
        default:
            return state;
    }
}