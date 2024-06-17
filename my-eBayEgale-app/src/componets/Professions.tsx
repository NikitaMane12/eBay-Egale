import React, { useState, useEffect } from "react";
import { Box, Image, Text, Button, Flex, Heading } from "@chakra-ui/react";

interface Review {
  id: number;
  image: string;
  name: string;
  title: number;
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
    <Box textAlign="center" margin="auto">
      <Text as="b" color="blue" fontSize="30px">
        TEAM MEMBERS
      </Text>
      <Heading fontSize="30px" mt="10px">
        Meet our professional and expert team members
      </Heading>
      <Text w="700px" color="#888c94" mb="55px" textAlign="center" ml="500px">
        Discover our team of seasoned professionals and experts dedicated to
        delivering exceptional service. Their expertise and commitment ensure
        your business achieves its fullest potential.
      </Text>

      <Flex
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        fontSize="20px"
      >
        {reviews.map((review, index) => (
          <Box
            key={review.id}
            flex="0 0 33.333%"
            display={
              index >= currentSlide && index < currentSlide + 3
                ? "block"
                : "none"
            }
            textAlign="center"
            mx="auto"
          >
            <Image
              src={review.image}
              alt={`Review ${review.id}`}
              width="330px"
              borderRadius="15px"
            />
            <Box
              backgroundColor="white"
              position="absolute"
              width="200px"
              borderRadius="5px"
              marginLeft="160px"
              marginTop="-50px"
              marginBottom="200px"
            >
              <Text>{review.name}</Text>
              <Text>{review.title}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <Button
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        backgroundColor="transparent"
        border="none"
        color="#000"
        fontSize="24px"
        cursor="pointer"
        left="10px"
        onClick={prevSlide}
      >
        &#10094;
      </Button>
      <Button
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        backgroundColor="transparent"
        border="none"
        color="#000"
        fontSize="24px"
        cursor="pointer"
        right="10px"
        onClick={nextSlide}
      >
        &#10095;
      </Button>
    </Box>
  );
};

export default Profession;
