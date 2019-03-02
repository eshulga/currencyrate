import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import Dashboard from './Dashboard'
import style from './style'

const mapStateToProps = state => ({
  selected: state.currencies.selected,
  rates: state.currencies.rates
})

export default connect(mapStateToProps)(withStyles(style)(Dashboard))
