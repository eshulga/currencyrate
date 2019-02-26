import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Dashboard = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={8}>
        <Paper className={classes.paper} />
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper} />
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
