import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      bg="#00006c"
      color="white"
      fontSize="20px"
    >
      {/* Section: Social media */}
      <Box
        as="section"
        display="flex"
        justifyContent={{ base: "center", lg: "space-evenly" }}
        p="4"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        {/* Left */}
        <Box display={{ base: "none", lg: "block" }} mr="5" fontSize="20px">
          <Text>Get connected with us on social networks:</Text>
        </Box>
        {/* Left */}

        {/* Right */}
        <Box display="flex " justifyContent="space-evenly">
          <Link href="" mx="2">
            <Icon as={FaFacebookF} />
          </Link>
          <Link href="" mx="2">
            <Icon as={FaTwitter} />
          </Link>
          <Link href="" mx="2">
            <Icon as={FaGoogle} />
          </Link>
          <Link href="" mx="2">
            <Icon as={FaInstagram} />
          </Link>
          <Link href="" mx="2">
            <Icon as={FaLinkedin} />
          </Link>
          <Link href="" mx="2">
            <Icon as={FaGithub} />
          </Link>
        </Box>
      </Box>

      <Box as="section" mt="5">
        <Box className="container" textAlign="left">
          {/* Grid row */}
          <Flex wrap="wrap" mt="3">
            {/* Grid column */}
            <Box flex="1" minW="200px" mb="4">
              {/* Content */}
              <Text as="h6" textTransform="uppercase" fontWeight="bold" mb="4">
                <a
                  className="navbar-brand"
                  href="#"
                  style={{ marginRight: "40px" }}
                >
                  <img
                    src="https://convextech.com/wp-content/uploads/2024/06/logo.svg"
                    style={{
                      width: "200px",
                      height: "auto",
                    }}
                    alt="Logo"
                  />
                </a>
              </Text>
              <Text
                mt="5px"
                fontSize="20px"
                marginRight="70px"
                marginTop="20px"
              >
                ConvexTech Inc. is proud to operate with a globally distributed
                team, ensuring a diverse and dynamic working environment.
              </Text>
            </Box>
            {/* Grid column */}

            {/* Grid column */}
            <Box flex="1" minW="200px" mb="4">
              {/* Links */}
              <Text
                as="h6"
                textTransform="uppercase"
                fontWeight="bold"
                mb="4"
                fontSize="20px"
                marginTop="20px"
              >
                Company
              </Text>
              <Text marginTop="20px">
                <Link href="#!" color="white" mt="6px" textDecoration="none">
                  Home
                </Link>
              </Text>
              <Text>
                <Link href="#!" color="white" textDecoration="none">
                  Why Choose Us
                </Link>
              </Text>
              <Text>
                <Link href="#!" color="white" textDecoration="none">
                  Contact Us
                </Link>
              </Text>
            </Box>
            {/* Grid column */}

            {/* Grid column */}
            <Box flex="1" minW="200px" mb="4" color="white">
              {/* Links */}
              <Text
                as="h6"
                textTransform="uppercase"
                fontWeight="bold"
                mb="4"
                fontSize="20px"
                marginTop="20px"
              >
                Solutions
              </Text>
              <Text marginTop="20px">
                <Link href="#!" color="white" textDecoration="none">
                  SAP Solutions
                </Link>
              </Text>
              <Text>
                <Link href="#!" color="white" textDecoration="none">
                  All Services
                </Link>
              </Text>
              <Text>
                <Link href="#!" color="white" textDecoration="none">
                  IT Services
                </Link>
              </Text>
              <Text>
                <Link href="#!" color="white" textDecoration="none">
                  Health Care Services
                </Link>
              </Text>
              <Text>
                <Link href="#!" color="white" textDecoration="none">
                  Non-IT and Engineering Services
                </Link>
              </Text>
            </Box>
            {/* Grid column */}

            {/* Grid column */}
            <Box flex="1" minW="200px" mb="4">
              {/* Links */}
              <Text
                as="h6"
                textTransform="uppercase"
                fontWeight="bold"
                mb="4"
                fontSize="20px"
                marginTop="20px"
              >
                Contact
              </Text>
              <Text marginTop="20px">
                <Icon as={FaHome} mr="3" /> 11200 Broadway Suite 2743, Pearland,
                TX 77584
              </Text>
              <Text>
                <Icon as={FaEnvelope} mr="3" /> info@example.com
              </Text>
              <Text>
                <Icon as={FaPhone} mr="3" /> + 01 234 567 88
              </Text>
              <Text>
                <Icon as={FaPrint} mr="3" /> + 01 234 567 89
              </Text>
            </Box>
            {/* Grid column */}
          </Flex>
          {/* Grid row */}
        </Box>
      </Box>
      {/* Section: Links */}

      {/* Copyright */}
      <hr></hr>
      <Box textAlign="center" p="4" bg="rgba(0, 0, 0, 0.05)" mt="6px" mb="6px">
        © Copyright 2024.
        <Link color="white" fontWeight="bold" href="">
          ConvexTech.com
        </Link>
      </Box>
      {/* Copyright */}
    </Box>
  );
};

export default Footer;
