import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState(' ');
    const params = useParams();
  return (
    <Container py="16" height={'90vh'}>
      <form>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            focusBorderColor="cyan.500"
            type="password"
            placeholder='New Password'
          />
          <Button type="submit" w={'full'} colorScheme="cyan">
    Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};


export default ResetPassword
