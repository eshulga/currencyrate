import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import Converter from './Converter'

import { setCurrency } from '../../actions'

import style from './style'

const mapStateToProps = state => ({
  currencies: state.currencies
})

const mapDispatchToProps = {
  setCurrency
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Converter))
