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
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar alt={post.autor.nome} src='/' />}
                title={<Typography variant="h5">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography
                            className={classes.caption}
                            variant="caption">Autor:</Typography>

                        <Typography
                            className={classes.caption}
                            variant="subtitle2">{post.autor.nome}</Typography>
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
                    <img src='/posts/post1.png' className={classes.image} alt='img' />
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
