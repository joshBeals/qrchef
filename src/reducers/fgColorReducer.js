
export default (state = '#000000', action) => {
    switch(action.type){
        case 'FG_COLOR':
            return action.payload;
        default:
            return state;
    }
}