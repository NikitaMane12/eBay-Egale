import React, { useState } from 'react';
import { Center, Box, Heading, Input, Button} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usersUrl } from '../../utils/server';
import { Link } from "react-router-dom";

interface UserData {
  email: string;
  pass: string;
}

export function Login() {
  const navigate = useNavigate();
  const [adminPass, setAdminPass] = useState<boolean>(false);
  const [userPass, setUserPass] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ email: '', pass: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const checkAuthenticUser = (data: any[]) => {
    return data.find(
      (element: any) =>
        element.email === userData.email && element.password === userData.pass
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.email === 'admin@gmail.com') {
      if (userData.pass === 'admin') {
        localStorage.setItem('admin', '1');
        navigate('/admin');
      } else {
        setAdminPass(true);
      }
    } else {
      axios
        .get(usersUrl)
        .then((res) => {
          const user = checkAuthenticUser(res.data);
          if (user) {
            console.log('User is valid:', user);
            localStorage.setItem('user_id', user.id);
            navigate('/');
          } else {
            setUserPass(true);
            console.log('Invalid credentials');
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Center h="100vh" w="100vw">
        <Box maxW="md" mx="auto" mt="8">
          <Heading as="h1" mb="4" textAlign="center" size="lg">
            Login
          </Heading>
          <Box bg="white" padding="16px" rounded="lg" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <form style={{padding:"50px"}} onSubmit={handleSubmit}>
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
                name="pass"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={userData.pass}
              /> <br />
              {adminPass && (
                <p style={{ paddingBottom: '10px', color: 'red' }}>Enter correct password</p>
              )}
              {userPass && (
                <p style={{ paddingBottom: '10px', color: 'red' }}>Please enter valid credential</p>
              )}
              <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px",width:"150px",margin:"10px",marginLeft:"130px"}} type="submit" colorScheme="blue" width="full">
                Login
              </Button>
            </form>
            <Box mt={4} textAlign="center">
              <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px",marginRight:"10px"}} variant="link" color="blue.500" onClick={() => navigate('/signup')}>
                Create new Account
              </Button>
              <Link to="/admin">
              <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px"}} variant="link" color="blue.500" onClick={() => navigate('/DashBoard')}>
                Admin Login
              </Button>
              </Link>
              
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}
