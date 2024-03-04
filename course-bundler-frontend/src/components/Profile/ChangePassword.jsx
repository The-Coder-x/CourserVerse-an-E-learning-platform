import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  return (
    <Container h={'90vh'} py={'16'}>
      <form >
        <Heading
          textTransform={'uppercase'}
          children={'Change Password'}
          my={'16'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'} >
          <Input
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type="password"
            focusBorderColor="cyan.500"
          />
          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="cyan.500"
          />
          <Button w=" full" colorScheme="cyan" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
