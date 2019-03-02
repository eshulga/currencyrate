import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

import { round } from '../../utils'

class Converter extends Component {
  componentDidMount() {
    const {
      getRates,
      currencies: { rates }
    } = this.props
    !rates && getRates()
  }

  currencyChange = e => {
    const { name, value } = e.target
    const { setCurrency } = this.props

    setCurrency({
      name,
      value
    })
  }

  amountChange = e => {
    const { value } = e.target
    const { setBaseAmount } = this.props

    setBaseAmount({
      value: parseFloat(value)
    })
  }

  rate = () => {
    const {
      currencies: {
        selected: { to, amount },
        rates
      }
    } = this.props

    return rates !== null ? round(rates[to] * amount, 2) : 0
  }

  render() {
    const {
      currencies: { list, selected },
      classes
    } = this.props

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={8}>
            <Grid container spacing={16}>
              <Grid item xs={4}>
                <TextField
                  id="outlined-number"
                  label="From"
                  name="amount"
                  value={round(selected.amount, 2)}
                  onChange={this.amountChange}
                  type="number"
                  inputProps={{
                    step: 0.01
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={8}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    value={selected.from}
                    className={classes.select}
                    onChange={this.currencyChange}
                    input={<OutlinedInput name="from" labelWidth={0} />}
                  >
                    {list
                      .filter(val => val !== selected.to)
                      .map(item => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid item xs={4}>
                <TextField
                  disabled
                  id="outlined-number"
                  label="To"
                  value={this.rate()}
                  onChange={this.currencyChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={8}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    value={selected.to}
                    className={classes.select}
                    onChange={this.currencyChange}
                    input={
                      <OutlinedInput type="text" labelWidth={0} name="to" />
                    }
                  >
                    {list
                      .filter(val => val !== selected.from)
                      .map(item => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Converter.propTypes = {
  classes: PropTypes.object,
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
  }),
  setCurrency: PropTypes.func,
  setBaseAmount: PropTypes.func,
  getRates: PropTypes.func
}

export default Converter
