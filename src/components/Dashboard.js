import React, { Component } from 'react'
import { Switch } from '@material-ui/core';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Switch
          checked={this.props.checked}
          onChange={this.props.toggleOnline}
          value="online"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
    )
  }
}
