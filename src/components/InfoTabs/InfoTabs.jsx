import React from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class CustomizedTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  renderTabs = (isTab, current) => {
    const { children, classes } = this.props

    return React.Children.map(children, (child, i, array) => {
      const { name } = child.props

      return isTab ? (
        <Tab
          key={i}
          disableRipple
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          label={name}
        />
      ) : (
        current === i && <div>{child}</div>
      )
    })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          {this.renderTabs(true)}
        </Tabs>
        {this.renderTabs(false, value)}
      </div>
    )
  }
}

export default CustomizedTabs
