import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { DateTime } from 'luxon'
import Typography from '@material-ui/core/Typography'

import { round } from '../../utils'

import InfoTabs from '../InfoTabs'
import Converter from '../Converter'
import HistoryRate from '../HistoryRate'
import TodayRates from '../TodayRates'

class Dashboard extends Component {
  lastUpdate = () =>
    DateTime.local().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)

  render() {
    const { classes, selected, rates } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid className={classes.leftItem} item xs={12} md={8}>
            <Paper className={classes.leftItemPaper}>
              <InfoTabs>
                <section name="Currency converter">
                  <Converter />
                </section>
                <section name="Historical rates">
                  <HistoryRate />
                </section>
              </InfoTabs>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6" className={classes.paperHeader}>
                    Your rate:
                  </Typography>
                  {`${selected.from} 1 = ${selected.to} ${
                    rates ? round(rates[selected.to], 4) : 0
                  }`}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Last update:</Typography>
                  {this.lastUpdate()}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <TodayRates />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  selected: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
    amount: PropTypes.number
  }),
  rates: PropTypes.object
}

export default Dashboard
