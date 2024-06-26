import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Spinner,
  Card,
  CardBody,
  Stack,
  Heading,
  keyframes,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

interface Post {
  id: string;
  image: string;
  name: string;
  title: string;
  paragraph: string;
}

const borderAnimation = keyframes`
  0% {
    clip-path: polygon(100% 0, 0 0, 0 0, 0% 0);
  }
  25% {
    clip-path: polygon(100% 0, 0 0, 0 0, 0 0%);
  }
  50% {
    clip-path: polygon(100% 0, 0 0, 0 100%, 0 0);
  }
  75% {
    clip-path: polygon(100% 0, 100% 0, 0 0, 0 0);
  }
  100% {
    clip-path: polygon(100% 0, 0 0, 100% 0, 0 100%);
  }
`;

const CardList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://reactdata-6.onrender.com/Services')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red">Error: {error}</Text>;
  }

  return (
    <>
      <Box textAlign="center" w="100%">
        <Box w="60%" mx="auto" textAlign="center" mb="20px">
          <Text as="b" color="blue" fontSize="20px">OUR SERVICES</Text>
          <Heading fontSize="30px" mt="10px" mb="10px" w="70%" mx="auto">Leading Recruitment Agency in USA and Canada</Heading>
          <Text w={{ base: "90%", md: "700px" }} color="#888c94" mx="auto" mb="10px">
            ConvexTech is committed to promoting diversity in all sectors of the economy. We have a thorough understanding of the difficulties that businesses encounter in today’s dynamic business environment. Our service team provides comprehensive, integrated solutions that enable businesses to shift confidently.
          </Text>
        </Box>
        <Box boxShadow='dark-lg' p='8' rounded='md' bg='white' mx="auto">
          <Grid templateColumns='repeat(2, 1fr)' gap={4}>
            {posts.map((post) => (
              <GridItem key={post.id} w="100%">
                <Card
                  p='6'
                  rounded='md'
                  bg='#ffffff'
                  padding="20px"
                  margin="10px"
                  direction={{ base: 'column', sm: 'row' }}
                  overflow="hidden"
                  variant="outline"
                  borderRadius="lg"
                  sx={{
                    position: 'relative',
                    boxShadow: '1px 2px 8px black',
                    border: '2px solid transparent',
                    transition: 'border 0.6s ease-in-out',
                    _hover: {
                      _before: {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: '2px solid blue',
                        borderRadius: 'inherit',
                        boxShadow: '0 0 0 2px blue',
                        animation: `${borderAnimation} 2s linear infinite`,
                        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                      },
                    },
                  }}
                >
                  <Box
                    style={{
                      width: "130px",
                      height: "90px",
                      padding: "10px",
                      marginTop: "20px",
                      gap: "6px",
                    }}
                    bg="#eef4fc"
                    mt={{ base: '10px', sm: '50px' }}
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                  >
                    <Image
                      style={{ width: "50px", height: "50px" }}
                      src={post.image}
                      alt={post.title}
                    />
                  </Box>
                  <Stack textAlign="center">
                    <CardBody textAlign="start" ml="20px">
                      <Text style={{ color: "#888c94", padding: "1px", margin: "0px" }}>{post.name}</Text>
                      <Heading style={{ fontSize: "18px", margin: "0px" }}>{post.title}</Heading>
                      <Text style={{ color: "#888c94" }} py="2">{post.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CardList;
