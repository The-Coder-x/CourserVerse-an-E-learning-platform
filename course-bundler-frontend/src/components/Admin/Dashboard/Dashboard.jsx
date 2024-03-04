import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownSLine, RiArrowUpLine } from 'react-icons/ri';
import { LineChart, DoughnutChart } from './Chart';

const Databox = ({ title, qty, qtyPercentage, profit }) => {
  return (
    <Box
      w={['full', '20%']}
      boxShadow={'-2px 0 10px rgba(107,20,193,0.5)'}
      p={'8'}
      borderRadius={'lg'}
    >
      <Text children={title} />
      <HStack spacing={'6'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
        <HStack>
          <Text children={`${qtyPercentage}%`} />
          {profit ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownSLine color="red" />
          )}
        </HStack>
      </HStack>
      <Text opacity={0.6} children={'Since Last Months'} />
    </Box>
  );
};

const Bar = ({ title, value, profit }) => {
  return (
    <Box py={'4'} px={['0', '20']}>
      <Heading size={'sm'} children={title} mb={2} />
      <HStack w="full" alignItems={'center'}>
        <Text
          children={profit ? '0%' : `-${value}%`}
          color={profit ? '' : 'red'}
        />
        <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{ cursor: `url(${cursor}),default` }}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last Change was on ${String(new Date()).split('G')[0]}`}
        />

        <Heading
          children={'Dashboard'}
          ml={['0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title={'Views'} qty={123} qtyPercentage={30} profit={true} />
          <Databox title={'Users'} qty={13} qtyPercentage={50} profit={true} />
          <Databox
            title={'Subscription'}
            qty={42}
            qtyPercentage={10}
            profit={false}
          />
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,20,193,0.5)'}
        >
          <Heading
            textAlign={['Center', 'left']}
            size={'md'}
            children={'Views Graph'}
            pt={['8', '0']}
            // pb={['8', '0']} //! Make Sure to commit this.
            ml={['0', '16']}
          />

          {/* Line Graph here  */}
          <LineChart />
        </Box>
        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children={'Progress Bar'}
              my={'8'}
              ml={['0', '16']}
            />
            <Box>
              <Bar profit={true} title="Views" value={30} />
              <Bar profit={true} title="Users" value={50} />
              <Bar profit={false} title="Subscription" value={10} />
            </Box>
          </Box>
          <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
            <Heading
              textAlign={'center'}
              size={'md'}
              mb={'4'}
              children="Users"
            />
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
