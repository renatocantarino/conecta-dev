import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';

import Tags from '../../Mocks/tagsMock'



import { makeStyles } from '@material-ui/core/styles';
import tags from 'language-tags';

const useStyles = makeStyles((theme) => ({
    imagePreview: {
        width: '100%',
    }, root: {
        marginTop: 80,
        width: 500,
        marginLeft: 10,
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    markdown: {
        color: theme.palette.text.primary,
    },
}));

function PersonInfo({ person }) {
    const classes = useStyles();
    const shareProfile = () => alert('share profile');

    return (
        <Card className={classes.root}  >

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Usuário logado : {person.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {person.name} gosta de <b>  {Tags?.map((item) => item.name).join(',')} </b>
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ justifyContent: 'center' }}>
                <Button
                    size="small"
                    color="secondary"
                    onClick={shareProfile}
                    variant="outlined">Compartilhar</Button>

            </CardActions>
        </Card>
    );
}

export default PersonInfo;