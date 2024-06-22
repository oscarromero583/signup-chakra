import React from "react";
import { 
Stack,
Box,
Badge,

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
            // alignItems={'center'}
            // justifyContent={'center'}
            // justifyItems={'center'}
            flexDirection={'column'}>
                        <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        
                        overflow={'hidden'}
                        borderRadius={'xl'}
                        bgColor={'teal.200'}
                        width={'300px'}>
                                <img 
                                src={Logo1} 
                                alt="Logo"  
                                width={'80px'} 
                                height={'9px'}
                                bgColor={'gray.500'}
                                borderRadius={'xl'}
                                />
                         </Box>
                            <Box marginTop={'5px'}>
                            <Badge variant={'solid'} variantColor={'teal.200'} borderRadius={'xl'}  marginLeft={'9px'}>
                                New?
                            </Badge>
                            <Badge variant={'solid'} variantColor={'teal.200'} borderRadius={'xl'} marginLeft={'9px'}>
                                Not New
                            </Badge>

                           <Box textTransform={'uppercase'} fontSize={'12px'} color={'gray.500'} letterSpacing={'wide'} fontStyle={'arial'}>
                            We dey for you!
                            </Box>
                          

                         </Box>

            </Box>
              
            </Stack>
          
            </Box>
        
    );
};

export default Card;