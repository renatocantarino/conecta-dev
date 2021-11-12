import React from 'react'
import { Button, ListItem, ListItemText, ListSubheader, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const UseStyles = makeStyles((themes) => ({
    root: {
        padding: themes.spacing(2),
        width: 275,
        height: 270,
        marginRight: themes.spacing(2)
    },
    btn: {
        width: '100%'
    }
}));

const tags = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'Node'
    },
    {
        id: 3,
        name: 'Next'
    },
    {
        id: 4,
        name: 'Vue'
    },
    {
        id: 5,
        name: 'Java'
    },
    {
        id: 6,
        name: 'Rust'
    }
]


function NavBar() {
    const classes = UseStyles();
    return (
        <Paper className={classes.root}>
            <Button variant="outlined"
                color="secondary"
                className={classes.btn}>
                Registrar grátis
            </Button>
            <ListSubheader>
                {
                    tags.map(tag => (
                        <ListItem dense button key={`item-${tag.id}-${tag.name}`}>
                            <ListItemText primary={`#${tag.name}`} />
                        </ListItem>
                    ))
                }
            </ListSubheader>
        </Paper>
    )
}

export default NavBar;
