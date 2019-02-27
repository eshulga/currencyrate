import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import InfoTabs from '../InfoTabs'
import Converter from '../Converter'
import HistoryRate from '../HistoryRate'
import TodayRates from '../TodayRates'

const Dashboard = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <InfoTabs>
            <section name="Currency converter">
              <Converter />
            </section>
            <section name="Historical rates">
              <HistoryRate />
            </section>
          </InfoTabs>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <TodayRates />
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default Dashboard
