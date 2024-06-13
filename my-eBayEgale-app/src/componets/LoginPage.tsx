import { useEffect, useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      paddingY={8} // Adjust padding as needed
      textAlign="center"
      bgGradient="linear(gray.300, gray.500, black)"
     
    ><Center>
      <Box
        width="530px"
        height="500px"
        bg="black"
        borderRadius="40px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="relative"
        overflow="hidden"
        zIndex={0}
        // marginTop={20}
      >
        <Box
          transition="transform 0.5s ease-in-out"
          transform={showLogin ? "translateY(0)" : "translateY(-100%)"}
          height="100%"
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="0"
        >
          <Login />
        </Box>
        <Box
          transition="transform 0.5s ease-in-out"
          transform={showLogin ? "translateY(100%)" : "translateY(0)"}
          height="100%"
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="1"
        >
          <SignUp />
        </Box>
        <Button
          onClick={handleToggleForm}
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="3"
          bg="white"
          borderRadius="20px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          {showLogin ? "Create a new Account" : "Already have an Account"}
        </Button>
      </Box></Center>
    </Box>
  );
};

export default LoginPage;