import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    blue: '#3f51b5',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
  </React.StrictMode>
);
