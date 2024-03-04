import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container h={'90vh'} py={'16'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          children={'Update Profile'}
          my={'16'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Jon Doe"
            type="text"
            focusBorderColor="cyan.500"
          />
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="jondeo@gmail.com"
            type="email"
            focusBorderColor="cyan.500"
          />

          <Button w=" full" colorScheme="cyan" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
