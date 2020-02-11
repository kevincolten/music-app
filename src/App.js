import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Snackbar } from '@material-ui/core';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    loggedIn: false,
    online: true,
    notification: ''
  }

  login = (e) => {
    e.preventDefault()
    this.setState({ loggedIn: true })
  }

  toggleOnline = (e) => {
    let online = !this.state.online;
    this.setState({
      online,
      notification: online ? '' : 'You are not online!'
    })
  }

  handleClose = () => {
    this.setState({ notification: '' })
  }

  render = () => {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Music App
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.loggedIn ? <Dashboard checked={this.state.online} toggleOnline={this.toggleOnline} /> : <Login onSubmit={this.login} /> }
        <Snackbar open={!!this.state.notification} onClose={this.handleClose} message={this.state.notification} />
      </div>
    );
  }

}

export default App;
