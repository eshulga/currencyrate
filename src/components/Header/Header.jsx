import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'

const Header = ({ classes }) => (
  <AppBar className={classes.header}>
    <h1>Currency</h1>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object
}

export default Header
