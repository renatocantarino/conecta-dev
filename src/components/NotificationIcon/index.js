import React, { useEffect, useRef, useState } from 'react';
import {
    SvgIcon,
    IconButton,
    Popover,
    Typography,
    Box,
    List,
    ListItem,
    Avatar,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core'



import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
} from 'react-feather';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getNotifications } from '../../state/actions/NotificationAction';

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
};

const useStyles = makeStyles((theme) => ({
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}));


function NotificationIcon() {

    const account = useSelector(state => state.account);
    const isAuthenticated = !!account.user;
    const notificacoes = useSelector(state => state.notifications.notifications);
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();

    const HandleOpen = () => setOpen(true);
    const HandleClose = () => setOpen(false);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getNotifications())
    }, [dispatch]);

    return (
        isAuthenticated && (
            <>
                <IconButton ref={ref} onClick={HandleOpen}>
                    <SvgIcon>
                        <BellIcon />
                    </SvgIcon>
                </IconButton>
                <Popover
                    onClose={HandleClose}
                    open={isOpen}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box p={2}>
                        <Typography variant="h6" color="textPrimary">
                            Notificações
                        </Typography>
                    </Box>
                    <List>
                        {notificacoes.map((notification) => {
                            const Icon = iconsMap[notification.type];
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.icon}>
                                            <SvgIcon>
                                                <Icon />
                                            </SvgIcon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={notification.title}
                                        primaryTypographyProps={{
                                            variant: 'subtitle2',
                                            colo: 'textPrimary',
                                        }}
                                        secondary={notification.description}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                </Popover>
            </>
        )
    );
}


export default NotificationIcon;
