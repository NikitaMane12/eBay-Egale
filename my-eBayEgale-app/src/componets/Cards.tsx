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

// Define keyframes for the border animation
const borderAnimation = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 100% 0);
  }
  25% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 0);
  }
  75% {
    clip-path: polygon(100% 0, 100% 0, 0 0, 0 0);
  }
  100% {
    clip-path: polygon(100% 0, 100% 0, 100% 0, 0 100%);
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
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        {posts.map((post) => (
          <GridItem key={post.id} w="90%">
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
                boxShadow: '3px 5px 10px black',
                border: '2px solid transparent',
                transition: 'border 0.4s ease-in-out',
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
                  marginTop: "40px",
                  gap: "6px",
                }}
                bg="#eef4fc"
                mt={{ base: '10px', sm: '50px' }}
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  style={{ width: "50px", height: "50px" }}
                  src={post.image}
                  alt={post.title}
                />
              </Box>
              <Stack>
                <CardBody textAlign="start" ml="20px">
                  <Text style={{ padding: "1px" }} size="md">{post.name}</Text>
                  <Heading size="">{post.title}</Heading>
                  <Text py="2">{post.paragraph}</Text>
                </CardBody>
              </Stack>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
