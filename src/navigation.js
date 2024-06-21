// src/App.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import Logo from './Romero-logo4.jpeg';

const Navigation = () => {
  return (
    
    <Box
      textAlign="center"
      fontSize="100px"
      display="flex"
      justifyContent="space-between"
      bgColor="teal.200"
      h="65px"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box paddingLeft="80px">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '50px', height: '40px', borderRadius: '50%' }}
        />
      </Box>
      <Box fontSize="20px" display="flex">
        Home
      </Box>
      <Box fontSize="20px" display="flex">
        Form
      </Box>
      
      <Box fontSize="20px" display="flex" paddingRight="210px">
        Card
      </Box>
    </Box>
  );
};

export default Navigation;
