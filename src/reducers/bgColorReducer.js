
export default (state = '#ffffff', action) => {
    switch(action.type){
        case 'BG_COLOR':
            return action.payload;
        default:
            return state;
    }
}