import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				ChatV8 BR
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [errors, setErrors] = React.useState({})
	const [values, setValues] = React.useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	function handleSubmit(event) {
		event.preventDefault()
		if (values.password !== values.confirmPassword) alert("Campos de confirmação de senha diferentes")

		const newUser = {
			name: values.name,
			email: values.email,
			password: values.password
		}

		axios.post('http://localhost:3050/signup', newUser)
			.then(res => {
				alert('Cadastro realizado com sucesso')
				window.location.replace("/")
			})
			.catch(err => {
				let error = []
				error.push(err.response.data.errors[0].constraints.minLength)
				error.push(err.response.data.errors[0].constraints.isNotBlank)
				error.push(err.response.data.errors[0].constraints.maxLength)
				alert(error)
			})
	}

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
        </Typography>
				<form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Nome"
								autoFocus
								onChange={handleChange('name')}
								helperText={errors.nome}
								error={errors.nome ? true : false}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								onChange={handleChange('email')}
								helperText={errors.email}
								error={errors.email ? true : false}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Senha"
								type="password"
								id="senha"
								onChange={handleChange('password')}
								helperText={errors.senha}
								error={errors.senha ? true : false}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="confirmPassword"
								label="Confirma Senha"
								type="password"
								id="confirmPassword"
								onChange={handleChange('confirmPassword')}
							/>
						</Grid>
						<Grid item xs={12}>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/" variant="body2">
								Já tem uma conta? Sign in
              </Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}