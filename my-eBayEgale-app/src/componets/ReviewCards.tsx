import { useEffect, useState } from "react";
import {
    Card,
    Stack,
    Image,
    Heading,
    Text,
    Button,
    Box,
    Flex,
} from "@chakra-ui/react";

interface Review {
    id: string;
    name: string;
    title: string;
    paragraph: string;
    image: string;
    stars: number;
}

export const ReviewCards = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        fetch("https://reactdata-6.onrender.com/Clients_review")
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === reviews.length - 2 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? reviews.length - 2 : prevSlide - 1
        );
    };

    return (
        <Box position="relative" marginTop="100px">

            <Box textAlign="left" margin="auto">
                <Text as='b' color="blue" fontSize="20px" ml="40px">OUR CLIENT'S REVIEW</Text>
                <Heading fontSize="30px" w="450px" ml="40px">What client say about us?</Heading>
            </Box>
            <Box  marginTop ="-90px" ml="900px">
                <Button
                    mr="20px"
                    padding="10px"
                    transform="translateY(-50%)"
                    backgroundColor="transparent"
                    border="1px solid"
                    color="#000"
                    marginTop="60px"
                    fontSize="24px"
                    cursor="pointer"
                    onClick={prevSlide}
                    borderRadius="8px"
                >
                    &#10094;
                </Button>
                <Button
                    padding="10px"
                    transform="translateY(-50%)"
                    backgroundColor="transparent"
                    border="1px solid"
                    color="#000"
                    marginTop="60px"
                    fontSize="24px"
                    cursor="pointer"
                    onClick={nextSlide}
                    borderRadius="8px"
                >
                    &#10095;
                </Button>
            </Box>

            <Flex
                justifyContent="center"
                alignItems="center"
                overflowX="hidden"
                gap={100}
                mt="50px"
            >
                {reviews.map((review, index) => (
                    <Box
                        key={review.id}
                        flex="0 0 300px"
                        display={index >= currentSlide && index < currentSlide + 2 ? "block" : "none"}
                        marginRight="-20px"
                    >
                        <Card boxShadow="1px 2px 3px" width="500px" padding="20px">
                            <Flex gap="30px">
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    objectFit="cover"
                                    width="150px"
                                    height="150px"
                                />
                                <Stack p="4">
                                    <Text textAlign="left">{review.paragraph}</Text>
                                    <Flex justify="space-between" align="center">
                                        <Box>
                                            <Heading size="md">{review.name}</Heading>
                                            <Text>{review.title}</Text>
                                        </Box>
                                        <Box>
                                            <div>
                                                {[(review.stars)].map((_, idx) => (
                                                    <span key={idx} style={{ color: "blue", fontSize: "25px" }}>
                                                        ★
                                                    </span>
                                                ))}
                                                {[(5 - review.stars)].map((_, idx) => (
                                                    <span key={idx} style={{ color: "#ccc", fontSize: "25px" }}>
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </Box>
                                    </Flex>
                                </Stack>
                            </Flex>
                        </Card>
                    </Box>
                ))}
            </Flex>
            
        </Box>
    );
};
