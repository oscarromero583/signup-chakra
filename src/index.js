import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Navigation from './navigation';
import SignUp from './signup';
import Login from './login'
import theme from './theme'



const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navigation />
      <SignUp />
      <Login />
    </ChakraProvider>
  </React.StrictMode>
);
