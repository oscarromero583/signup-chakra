import React from "react";
import { 
Stack,
Box,
 } from "@chakra-ui/react";
 import Logo1 from './Romero-logo9.png'



const Card = () => {
    return (
        <Box>
            
            <Stack spacing={3}
            marginLeft={'50%'}
            marginRight={'50%'}
            marginTop={'5px'}
            >
                <Box 
            borderRadius={'xl'}
            bgColor={'gray.200'}
            width={'300px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            justifyItems={'center'}>
                        <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        rounded={'xl'}
                        overflow={'hidden'}
                        borderRadius={'35%'}>
                                <img 
                                src={Logo1} 
                                alt="Logo"  
                                width={'80px'} 
                                height={'9px'}
                                bgColor={'gray.500'}
                                borderRadius={'35%'}
                                />
                         </Box>
                         <Box>
                            
                         </Box>

            </Box>
              
            </Stack>
          
            </Box>
        
    );
};

export default Card;