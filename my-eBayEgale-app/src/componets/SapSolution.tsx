import { Box, Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Contact } from '../pages/Contact';

export const SapSolution = () => {
    return (
        <div style={{ width: "100%" }}>
            <Flex gap={50} alignItems="center">
                <Box mb="40px" ml="50px" w="50%" mt="150px">
                    <Text color="black" fontSize="30px">FOR MILLIONS OF USERS</Text>
                    <Heading fontSize="70px" mx="auto">Leading<br />
                        SAP Solution Provider</Heading>
                    <Text fontSize="20px" mt="70px" w={{ base: "90%", md: "700px" }} color="#888c94" mx="auto">
                        At ConvexTech, we deliver cutting-edge SAP solutions tailored to meet your business needs. With a proven track record and a dedicated team of experts, we transform your operations and drive growth through innovative SAP technologies.
                    </Text>
                    <Button bg="blue" color="white" w="200px" padding="14px" borderRadius="10px" fontSize="19px">Get Started</Button>
                </Box>
                <Box w="50%">
                    <Image
                        borderRadius="12px"
                        width="800px"
                        height="700px"
                        position="relative"
                        src="https://notebrains.com/notebrains/wp-content/uploads/2022/07/17.jpg"
                    />
                </Box>
            </Flex>

            <Box display="flex" flexDirection="column" alignItems="center" mt="50px">
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width="900px"
                    height="350px"
                    gap="30px"
                    boxShadow='1px 2px 8px black'
                    padding="15px"
                    mb="40px"
                >
                    <Image
                        objectFit='cover'
                        width="300px"
                        src='https://convextech.com/wp-content/uploads/2021/11/1.svg'
                        alt='Process Transformation'
                    />
                    <Stack>
                        <CardBody mt="90px">
                            <Heading size='md'>Process Transformation</Heading>
                            <Text py='2'>
                                Our Process Transformation services streamline your business operations with advanced SAP solutions. We enhance procurement, logistics, sales processes, and data management through tailored strategies, ensuring efficiency and improved performance. Let us help you optimize your processes for maximum productivity and growth.
                            </Text>
                        </CardBody>
                    </Stack>
                </Card>

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width="900px"
                    height="350px"
                    gap="30px"
                    boxShadow='1px 2px 8px black'
                    padding="15px"
                >
                    <Image
                        objectFit='cover'
                        width="300px"
                        src='https://convextech.com/wp-content/uploads/2021/11/3.svg'
                        alt='Advanced Analytics Services'
                    />
                    <Stack>
                        <CardBody mt="90px">
                            <Heading size='md'>Advanced Analytics Services</Heading>
                            <Text py='2'>
                                Our Advanced Analytics services empower your business with insightful data-driven decision-making. Utilizing SAP BTP, SAP BW, SAP Analytics Cloud, Tableau, and leading RPA tools, we transform raw data into actionable intelligence. Enhance your strategic planning and operational efficiency with our cutting-edge analytics solutions.
                            </Text>
                        </CardBody>
                    </Stack>
                </Card>
            </Box>
            <Contact/>
        </div>
    );
};
