import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

class Converter extends Component {
  currencyChange = e => {
    const { name, value } = e.target
    const { setCurrency } = this.props

    setCurrency({
      name,
      value
    })
  }

  render() {
    const {
      currencies: { defaultValues, list, selected },
      classes
    } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <TextField
              id="outlined-number"
              label="From"
              value={0}
              onChange={() => null}
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
                value={selected.from || defaultValues.from}
                className={classes.select}
                onChange={this.currencyChange}
                input={<OutlinedInput name="from" id="outlined-from-simple" />}
              >
                {list
                  .filter(val =>
                    selected.to ? val !== selected.to : val !== defaultValues.to
                  )
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
              value={selected.to || defaultValues.to}
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
                className={classes.select}
                value={selected.to || defaultValues.to}
                onChange={this.currencyChange}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="to"
                    id="outlined-to-simple"
                  />
                }
              >
                {list
                  .filter(val =>
                    selected.from
                      ? val !== selected.from
                      : val !== defaultValues.from
                  )
                  .map(item => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Converter
