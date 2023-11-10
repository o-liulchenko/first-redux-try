const AUTHENTICATION_CREATE = 'AUTHENTICATION-CREATE';

let initialState = {
    authenticationStatus: 'none',
    profile: {}
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
            let userProfile = action.userProfile;
            return {...state, profile: userProfile};
        default:
            return state;
    }
}