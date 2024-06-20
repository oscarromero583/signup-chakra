// src/App.js
import React from 'react';
import { Box, Button, VStack, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
     
        <Heading>Welcome to Chakra UI</Heading>
        <Button colorScheme="teal" size="lg">
          Chakra Button
        </Button>
      
    </Box>
  );
}

export default App;