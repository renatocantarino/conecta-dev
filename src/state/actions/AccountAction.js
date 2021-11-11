import authService from '../../services/auth/signInService';

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS'
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const SIGNOUT = '@ACCOUNT/SIGNOUT';
export const SIGNUP = '@ACCOUNT/SIGNUP';


const signIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.signIn(email, password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user },
        });
    };
};


const signOut = () => {
    return async (dispatch) => {
        await authService.signOut();
        dispatch({
            type: SIGNOUT
        });
    };
};





const setUserData = () => {
    return async (dispatch) => {
        const user = await authService.signInWithToken();
        dispatch({
            type: SILENT_LOGIN,
            payload: { user },
        });
    };
};




export { signIn, signOut, setUserData };