

export const initialTheme = (theme) => {
    return { 
        type: 'SET_THEME',
        payload: theme
    };
}

export const changeTheme = (theme) => {
    return { 
        type: 'CHANGE_THEME',
        payload: theme
    };
}

export const changeCategory = (value) => {
    return { 
        type: 'CATEGORY',
        payload: value
    };
}

export const setQR = (value) => {
    return { 
        type: 'SET_QR',
        payload: value
    };
}

export const changeBG = (value) => {
    return { 
        type: 'BG_COLOR',
        payload: value
    };
}

export const changeFG = (value) => {
    return { 
        type: 'FG_COLOR',
        payload: value
    };
}