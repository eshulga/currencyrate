import React from 'react'
import AppBar from '@material-ui/core/AppBar'

const Header = ({ classes }) => (
  <AppBar className={classes.header}>
    <h1>Currency</h1>
  </AppBar>
)

export default Header
