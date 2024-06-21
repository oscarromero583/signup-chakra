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
 import { EmailIcon, LockIcon, InfoIcon } from "@chakra-ui/icons";



const SignUp = () => {
    return (
        <form action='submit' bgColor={'gray.200'}>
            <Stack spacing={3}
            marginLeft={'25%'}
            marginRight={'25%'}
            marginTop={'5%'}
            >
                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<InfoIcon name='info' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="text" placeholder="First Name"  borderColor={'black.500'} borderWidth={'2px'} isRequired/>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<InfoIcon name='info' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="text" placeholder="Last Name" borderColor={'black.500'} borderWidth={'2px'}/>
                    </InputGroup>
                </FormControl>
                <Divider mt={'5px'} mb={'5px'}/>
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
                    You are very much welcome. <br /> Feel at home
                </Box>
                
            </Stack>
        </form>
    );
};

export default SignUp;