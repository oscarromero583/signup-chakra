import React from "react";
import SignUp from './signup';
import Login from './login'
import { 
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
        <Box>
            <img src={Logo1} alt="Logo"  width={'9px'} height={'9px'}/>
            <Tabs>
                <TabList>
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
        </Box>
        
    );
};

export default Form;