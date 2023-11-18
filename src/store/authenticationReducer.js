const AUTHENTICATION_CREATE = 'AUTHENTICATION-CREATE';

let initialState = {
    authenticationStatus: 'none',
    user: null
}

export const authenticationCreateAction = (userProfile) => {
    return{
        type: AUTHENTICATION_CREATE,
        userProfile: userProfile
    }
}

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_CREATE:
            return {...state, user: action.userProfile, authenticationStatus: 'success'};
        default:
            return state;
    }
}