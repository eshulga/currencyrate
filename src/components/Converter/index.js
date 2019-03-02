import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import Converter from './Converter'

import { setCurrency, setBaseAmount, getRates } from '../../actions'

import style from './style'

const mapStateToProps = state => ({
  currencies: state.currencies
})

const mapDispatchToProps = {
  setCurrency,
  setBaseAmount,
  getRates
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Converter))
