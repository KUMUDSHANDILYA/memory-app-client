import React, {useState} from "react";
import {Avatar, Paper, Grid, Typography, Container, Button} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {

  const state = null;
  const classes = useStyles();

  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }

  return(
    <Container component = "main" maxWidth = "xs">
      <Paper className = {classes.paper} elevation = {3}>
        <Avatar className = {classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant = "h5">
          { !isSignup ? (
            'Sign up'
          ) : (
            'Sign in'
          )}
        </Typography>
        <form className = {classes.form} onSubmit = {handleSubmit}>
          <Grid container spacing = {2}>
            {
              isSignup && (
                <>
                  <Input name = "firstName" label = "First Name"
                   handleChange = {handleChange}
                   half autoFocus />

                   <Input name = "lastName" label = "Last Name"
                    handleChange = {handleChange}
                    half  />
                </>
              )
            }
            <Input name = "email" label = "Email Address" handleChange = {handleChange}
             type = "email" />

            <Input name = "password" label = "Password" handleChange = {handleChange}
            type = {showPassword ? "text" : "password"}
            handleShowPassword = {handleShowPassword} />

            {
              isSignup &&
              <Input name = "confirmPassword" label = "Confirm Password" handleChange = {handleChange}
              type = "password"/>
            }

            <Button type = "submit" fullWidth variant = "contained"
            color = "primary"
            className = {classes.submit} >
              {
                isSignup ? "Sign up" : "Sign in"
              }
            </Button>

            <Grid container justify = "flex-end">
              <Grid item>
                <Button onClick = {switchMode}>
                  {
                    isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"
                  }
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
