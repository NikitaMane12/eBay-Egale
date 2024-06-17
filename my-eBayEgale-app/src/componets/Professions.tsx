import React, { useState, useEffect } from "react";
import { Box, Image, Text, Button, Flex, Heading } from "@chakra-ui/react";

interface Review {
  id: number;
  image: string;
  name: string;
  title: string;
}

export const Profession: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("https://reactdata-6.onrender.com/members")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === reviews.length - 3 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 3 : prevSlide - 1
    );
  };

  return (
    <Box textAlign="center" margin="auto" position="relative" width="100%" marginTop="70px">
      <Text as="b" color="blue" fontSize="30px">
        TEAM MEMBERS
      </Text>
      <Heading fontSize="30px" mt="10px" mb="10px" w="40%" mx="auto">
        Meet our professional and expert team members
      </Heading>
      <Text w="700px" color="#888c94" mb="55px" textAlign="center" margin="0 auto">
        Discover our team of seasoned professionals and experts dedicated to
        delivering exceptional service. Their expertise and commitment ensure
        your business achieves its fullest potential.
      </Text>

      <Flex
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        fontSize="20px"
        position="relative"
      >
        {reviews.map((review, index) => (
          <Box
            key={review.id}
            flex="0 0 33.333%"
            marginTop="40px"
            display={
              index >= currentSlide && index < currentSlide + 3
                ? "block"
                : "none"
            }
            textAlign="center"
            mx="auto"
            position="relative"
            height="400px" 
          >
            
            <Image
              src={review.image}
              alt={`Review ${review.id}`}
              width="330px"
              borderRadius="15px"
              mx="auto"
              position="relative"
              zIndex="0"
            />
            <Box
              backgroundColor="white"
              position="absolute"
              width="280px"
              borderRadius="5px"
              left="50%"
              transform="translateX(-50%)"
              bottom="10px"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              p={2}
              zIndex="1"
            >
              <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              background="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 89, 252, 1) 100%)"
              zIndex="1"
              opacity="0"
              transition="opacity 0.3s"
              _hover={{ opacity: "1" }}
             
            />
              <Text fontWeight="bold">{review.name}</Text>
              <Text>{review.title}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <Button
        position="absolute"
        top="60%"
        transform="translateY(-50%)"
        backgroundColor="transparent"
        border="none"
        color="#000"
        fontSize="24px"
        cursor="pointer"
        left="10px"
        onClick={prevSlide}
        _hover={{ backgroundColor: "transparent" }}
      >
        &#10094;
      </Button>
      <Button
        position="absolute"
        top="60%"
        transform="translateY(-50%)"
        backgroundColor="transparent"
        border="none"
        color="#000"
        fontSize="24px"
        cursor="pointer"
        right="10px"
        onClick={nextSlide}
        _hover={{ backgroundColor: "transparent" }}
      >
        &#10095;
      </Button>
    </Box>
  );
};

export default Profession;
