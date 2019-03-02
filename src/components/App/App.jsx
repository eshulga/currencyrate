import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Dashboard from '../Dashboard'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <Header>Currency</Header>
        <main className={classes.main}>
          <Dashboard />
        </main>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object
}

export default App
