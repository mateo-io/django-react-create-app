import React from 'react';
import Hello  from './app';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Hello />
  </MuiThemeProvider>
);

ReactDOM.render( <App />, document.getElementById('react-app'))
