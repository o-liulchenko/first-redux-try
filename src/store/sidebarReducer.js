const SHOW_HIDE_SIDEBAR = 'SHOW-HIDE-SIDEBAR';

let initialState = {
    sidebarVisibility: 'show'
}

export const sidebarVisibilitySwitch = () => {
    return {
        type: SHOW_HIDE_SIDEBAR
    }
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HIDE_SIDEBAR:
            if(state.sidebarVisibility === 'show'){
                return {...state, sidebarVisibility: 'hide'};
            }
            else{
                return {...state, sidebarVisibility: 'show'};
            }
        default:
            return state;
    }
}