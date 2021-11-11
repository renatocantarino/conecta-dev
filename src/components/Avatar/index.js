import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Menu, MenuItem } from '@material-ui/core'

import { useNavigate } from 'react-router';
import { signOut } from '../../state/actions/AccountAction';


function AvatarAccount() {
    const account = useSelector(state => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = !!account.user;

    const HandleOpen = () => setOpen(true);
    const HandleClose = () => setOpen(false);

    const HandleSignOut = async () => {
        HandleClose();
        await dispatch(signOut());
        navigate('/');
    }


    return (
        <>
            <Avatar ref={ref} onClick={HandleOpen} alt={account.user && account.user.username} src="/" />
            {isAuthenticated ? (
                <Menu
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    open={isOpen}
                    onClose={HandleClose}
                    getContentAnchorEl={null}>
                    <MenuItem>
                        Perfil
                    </MenuItem>
                    <MenuItem>
                        Meus Posts
                    </MenuItem>
                    <MenuItem onClick={HandleSignOut}>
                        Sair
                    </MenuItem>
                </Menu>
            ) : (
                <Menu
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    open={isOpen}
                    onClose={HandleClose}
                    getContentAnchorEl={null}>
                    <MenuItem onClick={() => navigate('/sign-up')}>
                        Registrar Grátis
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/sign-in')}>Entrar</MenuItem>
                </Menu>)

            }
        </>
    )

}

export default AvatarAccount;

