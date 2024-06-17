import { Box, Flex, Heading, Image, Text, keyframes } from '@chakra-ui/react';

export const ThirdCol = () => {
  const move = keyframes`
    25% { background-color: yellow; right: 500px; top: 0px; }
    100% { background-color: red; right: 0px; top: 0px; }
  `;

  return (
    <div>
      <Flex mt="100px" gap="150px">
        <Image
          borderRadius="12px"
          width="400px"
          height="400px"
          position="relative"
          animation={`${move} 4s linear infinite`}
          src="https://convextech.com/wp-content/uploads/2021/07/1-1.jpg"
        />
        <Box textAlign="left">
          <Heading fontSize="40px">We promise high quality IT and Non-IT Agency Services</Heading>
          <Text color="#6a6a6b">
            We deliver top-quality IT and Non-IT services tailored to your business needs.
            Our expert team ensures reliable, efficient solutions to drive your success.
            Partner with us for exceptional results.
          </Text>
          <Flex p={2} mb={8}>
            <Image
              width="35px"
              height="35px"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoiaonmzc1m22UGFFEGQ58n3zFCv5rt-dDW8pT7JD1HY04l38f"
            />
            <Heading ml="20px" mt="-2px" color="#6a6a6b">
              Experts around the world
            </Heading>
          </Flex>
          <Flex p={2} mt={12}>
            <Image
              width="35px"
              height="35px"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoiaonmzc1m22UGFFEGQ58n3zFCv5rt-dDW8pT7JD1HY04l38f"
            />
            <Heading ml="20px" mt="-2px" color="#6a6a6b">
              Best Practice for industry
            </Heading>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};








