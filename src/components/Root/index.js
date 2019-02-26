import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from '../App';
import store from '../../store';
import theme from '../../theme';

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

export default Root;
