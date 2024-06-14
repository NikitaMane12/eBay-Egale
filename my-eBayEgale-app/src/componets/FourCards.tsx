import { Box, Card, Flex, Heading, Image, SimpleGrid, Text, keyframes } from '@chakra-ui/react';

const move = keyframes`
  0% {
    clip-path: inset(100% 100% 0 0);
  }
  25% {
    clip-path: inset(100% 100% 0 0);
  }
  50% {
    clip-path: inset(50% 100% 0 0);
  }
  75% {
    clip-path: inset(25% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

const animatedCardStyles = {
  position: 'relative',
  boxShadow: '1px 2px 3px black',
  border: '5px solid transparent',
  transition: 'border 0.6s ease-in-out',
  _hover: {
    '::after': {
      content: '""',
      position: 'absolute',
      bottom: '-5px', 
      left: 0,
      width: '100%',
      height: '5px',
      backgroundColor: 'blue',
      animation: `${move} 2s linear infinite`,
    },
  },
};

export const FourCards = () => {
  return (
    <div>
      <Box textAlign="center" mt="100px" m="40px">
        <Text as='b' color="blue" fontSize="20px">WORK PROCESS</Text>
        <Heading fontSize="30px" m="10px" w="450px" ml="300px">How we help of your businessGrow and successful</Heading>
        <Text w="700px" color="#888c94" m="10px" textAlign="center" ml="220px">Partnering for Growth and Success: Transforming Your Business Together</Text>
      </Box>
      <SimpleGrid spacing={40} mt={80} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
        <Card
         sx={animatedCardStyles} p="20px" pt="60px" height="250px">
          <Flex gap="40%">
            <Heading fontSize="50px" m="0px" color="blue">01</Heading>
            <Image w="50px" h="50px" m="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JOXxLKG14EffTO6WPHFNFZqwgljsW518-XZZKlmVaWh0txxB" alt="" />
          </Flex>
          <Heading m="0px" fontSize="17px" textAlign="left">Choose a Service</Heading>
          <Text textAlign="left">Explore our range of solutions to find the perfect fit for your business needs.</Text>
        </Card>
        <Card sx={animatedCardStyles} p="20px" pt="60px">
          <Heading m="0px" fontSize="17px" textAlign="left">Request a Meeting</Heading>
          <Text textAlign="left">Schedule a consultation to discuss your goals and how we can help you achieve them</Text>
          <Flex gap="40%">
            <Heading fontSize="50px" m="0px" color="blue">02</Heading>
            <Image w="60px" h="60px" m="10px" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqyril8n3GdMrU1VZb1oJmRP64Q5E794SgUCvfu53Fv82gQEk6" alt="" />
          </Flex>
        </Card>
        <Card sx={animatedCardStyles} p="20px" pt="60px">
          <Flex gap="40%">
            <Heading fontSize="50px" m="0px" color="blue">03</Heading>
            <Image w="70px" h="70px" m="10px" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRV2UtfeXcF8MgQlf-JFuscKeDO5myeo-T0Ezbc5MV5MS-0K_XD" alt="" />
          </Flex>
          <Heading m="0px" fontSize="17px" textAlign="left">Receive Custom Plan</Heading>
          <Text textAlign="left">Get a tailored strategy designed specifically to meet your business objectives.</Text>
        </Card>
        <Card sx={animatedCardStyles} p="20px" pt="60px">
          <Heading m="0px" fontSize="17px" textAlign="left">Let’s Make it Happen</Heading>
          <Text textAlign="left">Implement the plan with our expert support, driving your business towards success.</Text>
          <Flex gap="40%">
            <Heading fontSize="50px" m="0px" color="blue">04</Heading>
            <Image w="80px" h="80px" m="7px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwZlxPZjjxPf8lgXTNLhw2rV9GXB6SwH5jlU5mjlzn_62_FhE" alt="" />
          </Flex>
        </Card>
      </SimpleGrid>
    </div>
  );
};
