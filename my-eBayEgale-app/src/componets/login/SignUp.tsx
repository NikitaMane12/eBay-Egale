import React, { useState } from 'react';
import { Center, Box, Heading, Input, Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { FaRegTimesCircle} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { usersUrl } from '../../utils/server';
import { FaRegCircleCheck } from 'react-icons/fa6';

interface UserData {
  u_name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const [userData, setUserData] = useState<UserData>({
    u_name: '',
    email: '',
    password: '',
  });
  const [passBox, setPassBox] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialChar: false,
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    // Validate password criteria
    if (name === 'password') {
      setPassBox(true);
      setPasswordValid({
        length: value.length >= 8,
        lowercase: /[a-z]/.test(value),
        uppercase: /[A-Z]/.test(value),
        numbers: /\d/.test(value),
        specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
      });
    }
  };

  const checkAuthenticUser = (data: any[]) => {
    return data.find((element: any) => element.email === userData.email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      passwordValid.length &&
      passwordValid.lowercase &&
      passwordValid.numbers &&
      passwordValid.uppercase &&
      passwordValid.specialChar
    ) {
      axios
        .get(usersUrl)
        .then((res) => {
          const user = checkAuthenticUser(res.data);
          if (user) {
            toast({
              title: 'Already you have an account, Please login',
              status: 'error',
              isClosable: true,
            });
          } else {
            axios
              .post(usersUrl, userData)
              .then((res) => {
                console.log(res);
                toast({
                  title: 'Account created successfully.',
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                });
                navigate('/login');
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    } else {
      toast({
        title: 'Please enter valid email and password',
        duration: 9000,
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Center h="100vh" w="100vw">
      <Box maxW="md" mx="auto" mt="8">
        <Heading as="h1" mb="4" textAlign="center" size="lg" mt={100}>
          Sign Up
        </Heading>
        <Box bg="white" p="8" rounded="lg" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <form style={{padding:"50px"}} onSubmit={handleSubmit}>
          <label >User Name</label> <br />
            <Input
            style={{padding:"10px",width:"400px",borderRadius:"6px",marginTop:"5px"}}
              mb="4"
              name="u_name"
              placeholder="Username"
              onChange={handleChange}
              value={userData.u_name}
            /> <br />
            <label >Email</label> <br />
            <Input
            style={{padding:"10px",width:"400px",borderRadius:"6px",marginTop:"5px"}}
              mb="4"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
            /> <br />
            <label >Password</label> <br />
            <Input
            style={{padding:"10px",width:"400px",borderRadius:"6px",marginTop:"5px"}}
              mb="4"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={userData.password}
            /> <br />

            {passBox && (
              <div style={{ paddingBottom: '20px' }}>
                <Flex alignItems="center" h="30px">
                  {passwordValid.length ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p style={{ color: passwordValid.length ? 'green' : 'red', paddingLeft: '2%' }}>
                    Minimum 8 characters
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.lowercase ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p style={{ color: passwordValid.lowercase ? 'green' : 'red', paddingLeft: '2%' }}>
                    At least one lowercase letter
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.uppercase ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p style={{ color: passwordValid.uppercase ? 'green' : 'red', paddingLeft: '2%' }}>
                    At least one uppercase letter
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.numbers ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p style={{ color: passwordValid.numbers ? 'green' : 'red', paddingLeft: '2%' }}>
                    At least one number
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.specialChar ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p style={{ color: passwordValid.specialChar ? 'green' : 'red', paddingLeft: '2%' }}>
                    At least one special character
                  </p>
                </Flex>
              </div>
            )}
            <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px", width:"150px", margin:"20px",marginLeft:"120px"}} type="submit" colorScheme="blue" width="full">
              Sign Up
            </Button>
          </form>
          <Box mt={4} textAlign="center">
            <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px", width:"150px"}} variant="link" color="blue.500" onClick={() => navigate('/login')}>
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
