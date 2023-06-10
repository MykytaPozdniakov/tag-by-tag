import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { GoogleSignInButton } from '../../components';

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Grid container spacing={0} justifyContent="center" direction="row">
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          spacing={2}
          className="login-form"
        >
          <Paper
            variant="elevation"
            elevation={2}
            className="login-background"
          >
            <Grid item>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleLogin}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      type="email"
                      placeholder="Email"
                      fullWidth
                      name="username"
                      variant="outlined"
                      required
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button-block"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item>
              <GoogleSignInButton />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
