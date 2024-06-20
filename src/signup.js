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


const SignUp = () => {
    return (
        <form action='submit' bgColor={'gray.200'}>
            <Stack spacing={3}
            marginLeft={'25%'}
            marginRight={'25%'}
            marginTop={'15%'}
            >
                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='info' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="text" placeholder="First Name"  borderColor={'black.500'} borderWidth={'2px'} isRequired/>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='info' />} />
                        <Divider orientation={'vertical'} borderColor={'black.300'} />
                        <Input type="text" placeholder="Last Name" borderColor={'black.500'} borderWidth={'2px'}/>
                    </InputGroup>
                </FormControl>
                <Divider mt={'5px'} mb={'5px'}/>
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

export default SignUp;