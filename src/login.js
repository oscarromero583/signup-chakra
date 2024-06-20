import React from "react";
import { 
Stack,
Input,
InputGroup,
InputLeftElement,
FormControl,
Button,
Icon,
Divider
 } from "@chakra-ui/react";


const Login = () => {
    return (
        <form action='submit'>
            <Stack spacing={3}
            marginLeft={'25%'}
            marginRight={'25%'}
            marginTop={'15%'}
            >

<FormControl>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='email' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="email" placeholder="Email" borderColor={'black.500'} borderWidth={'2px'}/>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='lock' />} />
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
            </Stack>
        </form>
    );
};

export default Login;