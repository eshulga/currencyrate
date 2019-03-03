const style = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 13,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  leftItem: {
    display: 'flex',
    justifyContent: 'center'
  },
  leftItemPaper: {
    padding: theme.spacing.unit * 2,
    width: '100%'
  },
  formControl: {
    margin: `${theme.spacing.unit}px 0`
  }
})

export default style
