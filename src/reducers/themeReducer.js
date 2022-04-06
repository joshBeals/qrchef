
export default (state = '', action) => {
    switch(action.type){
        case 'SET_THEME':
            return action.payload;
        case 'CHANGE_THEME':
            return action.payload;
        default:
            return state;
    }
}