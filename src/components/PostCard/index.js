import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Avatar, Card,
    CardActions,
    CardContent,
    CardHeader,
    CardActionArea,
    Typography,
    IconButton
} from '@material-ui/core';

import { useNavigate } from 'react-router';
import moment from 'moment';

import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px',
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: 'auto',
    },
}));


function PostCard({ post }) {
    const classes = useStyles();
    const navigate = useNavigate();

    const HandlePostClick = () => navigate('/posts/como-melhorar-seu-codigo-javascript');
    return (
        <Card className={classes.root} onClick={HandlePostClick}>
            <CardHeader
                avatar={<Avatar alt={post.author.name} src='/' />}
                title={<Typography variant="h5">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography
                            className={classes.caption}
                            variant="caption">Autor:</Typography>

                        <Typography
                            className={classes.caption}
                            variant="subtitle2">{post.author.name}
                        </Typography>

                        <Typography
                            className={classes.caption}
                            variant="caption">
                            | {moment(post.date).fromNow()}
                        </Typography>
                    </div>
                }
            />


            <CardContent className={classes.content}>
                <Typography
                    className={classes.message}
                    variant="body1">
                    {post.name}
                </Typography>
                <CardActionArea>
                    <img src='imgs/posts/post1.png' className={classes.image} alt='img' />
                </CardActionArea>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="body2">
                        10
                    </Typography>
                </IconButton>

                <IconButton aria-label="comments">
                    <MessageIcon />
                    <Typography

                        style={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="body2">
                        10
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostCard;
