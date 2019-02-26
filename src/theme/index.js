import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    common: {
      black: 'rgba(25, 25, 25, 0.89)',
      white: '#fff'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    primary: {
      light: '#7986cb',
      main: '#0C67ED',
      dark: '#303f9f',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff4081',
      main: 'rgba(229, 34, 103, 1)',
      dark: '#c51162',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  },
  font: {
    default: 'Roboto, sans-serif'
  }
});

export default theme;
