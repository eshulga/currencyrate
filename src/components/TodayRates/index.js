import TodayRates from './TodayRates'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import style from './style'

const mapStateToProps = state => ({
  currencies: state.currencies
})

export default connect(mapStateToProps)(withStyles(style)(TodayRates))
