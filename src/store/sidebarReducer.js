const SIDEBAR_STYLE_SWITCH = 'SHOW-HIDE-SIDEBAR';

let initialState = {
    sidebarStyle: {
        state: 'show',
        styles: {
            width: '250px'
        }
    }
}

export const sidebarStyleSwitch = () => {
    return {
        type: SIDEBAR_STYLE_SWITCH
    }
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_STYLE_SWITCH:
            if (state.sidebarStyle.state === 'show') {
                return {
                    ...state, sidebarStyle: {
                        state: 'hide',
                        styles: {
                            width: '0px',
                            padding: 0
                        }
                    }
                };
            }
            else {
                return {
                    ...state, sidebarStyle: {
                        state: 'show',
                        styles: {}
                    }
                };
            }
        default:
            return state;
    }
}