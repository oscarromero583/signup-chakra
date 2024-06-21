import React from "react";
import SignUp from './signup';
import Login from './login'
import { 
Stack,
Box,
Tab,
Tabs,
TabList,
TabPanel,
TabPanels
 } from "@chakra-ui/react";
 import Logo1 from './Romero-logo9.png'


const Form = () => {
    return (
        <Box height={'100vh'}>
            <Stack spacing={3}
            marginLeft={'25%'}
            marginRight={'25%'}
            marginTop={'5%'}
            bgColor={'gray.200'}
            rounded={'xl'}
            >
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
            <Tabs >
                <TabList 
                justifyContent={'space-between'}
                alignItems={'center'} 
                marginLeft={'15%'} 
                marginRight={'15%'} 
                bgColor={'teal.200'}
                borderRadius={'10px'}
                boxShadow={'sm'}
                _hover={{ boxShadow:'md'}}
                _active={{ boxShadow: "xl"}}>
                    <Tab>Sign Up</Tab>
                    <Tab>Login</Tab>
                </TabList>
            
            <TabPanels>
                <TabPanel>
                     <SignUp />
                </TabPanel>
                <TabPanel>
                     <Login />
                </TabPanel>
                
            </TabPanels>
            </Tabs>
            </Stack>
        </Box>
        
    );
};

export default Form;