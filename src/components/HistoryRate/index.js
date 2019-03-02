import HistoryRate from './HistoryRate'
import { withStyles } from '@material-ui/core'

import { connect } from 'react-redux'

import { getHistoryRate, setPeriod } from '../../actions'

import { style } from './style'

const mapStateToProps = state => ({
  currencies: state.currencies
})

const mapDispatchToProps = {
  getHistoryRate,
  setPeriod
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(HistoryRate))
