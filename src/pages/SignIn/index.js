import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((themes) => ({
    root: {
        display: 'flex',
        height: '100vh',

    },
    image: {
        background: 'green',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        background: 'red',
        flexBasis: '42%',
    }
}));


function SignIn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <div className={classes.image}>
                <h2>Titulo</h2>
                <h2>Sub</h2>

            </div>
            <div className={classes.form}>form</div>

        </div>
    )
}
export default SignIn;