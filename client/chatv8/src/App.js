import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../src/utils/auth'
import './App.css';

//Pages
import login from './pages/user/Login';
import signUp from './pages/user/Signup';
import home from './pages/chat/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/home" component={home} />
              <Route exact path="/" component={login} />
              <Route exact path="/signup" component={signUp} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;