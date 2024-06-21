import React from "react";
import { 
Stack,
Input,
InputGroup,
InputLeftElement,
FormControl,
Button,
Box,
Divider
 } from "@chakra-ui/react";
 import { EmailIcon, LockIcon } from "@chakra-ui/icons";



const Login = () => {
    return (
        <form action='submit'>
            <Stack spacing={3}
            marginLeft={'25%'}
            marginRight={'25%'}
            marginTop={'5%'}
            >

                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon name='email' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="email" placeholder="Email" borderColor={'black.500'} borderWidth={'2px'}/>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<LockIcon name='lock' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="password" placeholder="Password" borderColor={'black.500'} borderWidth={'2px'}/>
                    </InputGroup>
                </FormControl>
                <Button 
                type="submit"
               _hover={{ boxShadow:'md'}}
               _active={{ boxShadow:'lg'}}
               bgColor={'teal.200'}>
                    Sign Up
                </Button>
                <Box textColor={'gray.500'} textAlign={'center'}>
                    Welcome back. <br /> Feel at home
                </Box>
            </Stack>
        </form>
    );
};

export default Login;