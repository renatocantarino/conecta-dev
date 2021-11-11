import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Box, Button, Link, FormHelperText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import { signIn } from '../../state/actions/AccountAction'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    image: {
        backgroundImage: 'url(/imgs/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),
    },
    form: {
        margin: theme.spacing(2, 4),
    },
}));


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Cantarino © {new Date().getFullYear()}
        </Typography>
    );
}

function SignIn() {

    const classes = useStyles();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState();

    const dispatch = useDispatch();
    async function handleSubmit() {
        try {
            await dispatch(signIn(email, password));
            navigate('/');
        }
        catch (error) {
            setErrors(error.response.data.message);
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                md={7}
                className={classes.image}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                    <strong>
                        Simplificando a forma de conectar desenvolvedores de software!
                    </strong>
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: 'rgb(255,255,255, 0.7)',
                        marginTop: 30,
                        fontSize: 15,
                        lineHeight: '30px',
                    }}
                >
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
                    software.
                </Typography>

            </Grid>
            <Grid item md={5}>
                <Box display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">Acesso</Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            autoFocus
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            className={classes.button}
                            fullWidth
                            color="primary"
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Entrar
                        </Button>
                        {
                            errors && <FormHelperText error >
                                {errors}
                            </FormHelperText>
                        }

                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Esqueceu sua senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Não tem uma conta? Cadastre-se
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>

    )
}
export default SignIn;