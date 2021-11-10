const INITIAL_STATE = {
    user: {}
}

const accountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_SUCESS':
            return { ...state, user: action.payload }
    }
    return state;
}

export default accountReducer;