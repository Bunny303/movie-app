import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

const baseStyles = () => injectGlobal`
  ${styledNormalize}
 
  body {
    padding: 0;
  }
`

const renderApp = () => {
  baseStyles();
 
  render(<App />, document.getElementById('root'));
};

renderApp();
