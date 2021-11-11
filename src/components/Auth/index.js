import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import AuthService from "../../services/auth/signInService";
import { setUserData } from "../../state/actions/AccountAction";

function Auth({ children }) {
    const dispatch = useDispatch();

    const initAuth = useCallback(async () => {
        if (AuthService.isAuthenticated()) {
            await dispatch(setUserData());
        }

    }, [dispatch]);

    useEffect(() => {
        initAuth()
    }, [initAuth])


    return children;
}


export default Auth;