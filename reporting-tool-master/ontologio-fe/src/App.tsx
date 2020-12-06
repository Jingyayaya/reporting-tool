import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Container, CssBaseline, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import LoginTab from "./routes/auth/LoginTab";
import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import SignUp from "./routes/auth/SignUp";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
}));

function App() {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <React.Fragment>
        <CssBaseline />

        <Router>
          <Switch>
            <Route path="/signin">
              <Container maxWidth="sm" style={{ marginTop: '64px', height: '600px' }}>
                <LoginTab />
              </Container>
            </Route>
            <Route path="/signup">
              <Container maxWidth="sm" style={{ marginTop: '64px', height: '600px' }}>
                <SignUp />
              </Container>
            </Route>
            <Route path="/">
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    Ontologio
                  </Typography>
                  <Button className={classes.button} color="inherit" variant="outlined" href="/signin">Sign in</Button>
                  <Button color="inherit" variant="outlined" href="/signup">Sign up</Button>
                </Toolbar>
              </AppBar>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
