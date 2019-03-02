import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer } from 'recharts'

import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'

import { round } from '../../utils'

import MinLineChart from '../Charts'

class HistoryRate extends Component {
  componentDidMount() {
    const { getHistoryRate } = this.props

    getHistoryRate()
  }

  prepareData = () => {
    const {
      currencies: {
        historyRate,
        selected: { to }
      }
    } = this.props

    const data = []

    const dates = Array.from(Object.keys(historyRate)).sort((a, b) =>
      a < b ? -1 : 1
    )

    dates.forEach(date => {
      data.push({
        name: date,
        [to]: round(parseFloat(historyRate[date][to]), 4)
      })
    })
    return data
  }

  selectPeriod = e => {
    const { setPeriod } = this.props
    const { value } = e.target
    setPeriod(parseInt(value))
  }

  setInterval = period => {
    switch (period) {
      case 3: {
        return 10
      }
      case 6: {
        return 15
      }
      case 12: {
        return 30
      }
      default:
        return 0
    }
  }

  render() {
    const {
      classes,
      currencies: {
        selected: { to },
        historyRate,
        chosenPeriod,
        period
      }
    } = this.props

    return (
      <div>
        <Grid container>
          <Grid item xs={12} className={classes.tools}>
            Last
            <Select
              native
              value={chosenPeriod}
              className={classes.select}
              onChange={this.selectPeriod}
              inputProps={{
                name: 'period'
              }}
            >
              {period.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            month{chosenPeriod > 1 && 's'}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.chartConteiner}>
            {!!historyRate && (
              <ResponsiveContainer>
                <MinLineChart
                  responsive
                  data={this.prepareData()}
                  XAxisInterval={this.setInterval(chosenPeriod)}
                  dataKey={to}
                />
              </ResponsiveContainer>
            )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

HistoryRate.propTypes = {
  getHistoryRate: PropTypes.func,
  setPeriod: PropTypes.func,
  currencies: PropTypes.shape({
    list: PropTypes.array,
    selected: PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      amount: PropTypes.number
    }),
    rates: PropTypes.object,
    historyRate: PropTypes.object,
    period: PropTypes.array,
    chosenPeriod: PropTypes.number
  })
}

export default HistoryRate
