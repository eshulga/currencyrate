import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

import { round } from '../../utils'

class TodayRates extends Component {
  renderRate = () => {
    const {
      classes,
      currencies: {
        selected: { to, from },
        rates,
        list
      }
    } = this.props

    return list.map(item => {
      if (item !== from && item !== to) {
        return (
          <ListItem key={item}>
            <div className={classes.code}>{`${item}`}</div>
            {` - `}
            <div className={classes.value}>{`${
              !!rates[item] ? round(rates[item], 4) : ''
            }`}</div>
          </ListItem>
        )
      }

      return null
    })
  }

  render() {
    const {
      classes,
      currencies: {
        selected: { from },
        rates
      }
    } = this.props

    return (
      <React.Fragment>
        <Typography
          variant="h5"
          className={classes.header}
        >{`TodayRates ${from}`}</Typography>
        <Divider />
        <List>{!!rates ? this.renderRate() : 'Loading...'}</List>
      </React.Fragment>
    )
  }
}

export default TodayRates
