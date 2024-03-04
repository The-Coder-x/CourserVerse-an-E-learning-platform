import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdacity } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading
              textAlign={['center', 'left']}
              children="LEARN FROM THE EXPERTS"
              size={'2xl'}
            />
            <Text
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="cyan">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics "
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          color={'cyan.400'}
          textAlign={'center'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdacity />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          // autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          src={introVideo}
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
