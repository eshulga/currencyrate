const style = theme => ({
  app: {
    fontFamily: theme.font.default,
    'background-color': theme.palette.background.default
  },
  main: {
    position: 'relative',
    height: '100%',
    maxWidth: '1024px',
    margin: '0 auto',
    padding: `0 ${theme.spacing.unit * 2}`
  }
});

export default style;
