import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Navigation from './navigation';
import Form from './form'
import theme from './theme'



const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navigation />
      <Form />
    </ChakraProvider>
  </React.StrictMode>
);
