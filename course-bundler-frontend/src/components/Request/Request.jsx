import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  return (
    <Container h={'90vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading
          marginTop={'5rem'}
          children={'Request New Course'}
          textTransform={'uppercase'}
        />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Joe..."
              focusBorderColor="cyan.500"
              type="text"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              focusBorderColor="cyan.500"
              type="email"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain The Course..."
              focusBorderColor="cyan.500"
            />
          </Box>

          <Button my="4" colorScheme={'cyan'} type="submit">
            Send Mail
          </Button>

          <Box my="4">
            See Available Course!{' '}
            <Link to="/courses">
              <Button colorScheme={'cyan'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};



export default Request
