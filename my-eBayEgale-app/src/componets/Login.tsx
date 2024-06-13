import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { loginData, loginSuccess } from "../Redux/action";
// import { AppDispatch } from "../Redux/store";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (form.email === "admin@admin.com" && form.password === "admin") {
      const Admin = {
        firstName: "Admin",
        email: form.email,
        password: form.password,
      };
      dispatch(loginSuccess(Admin));
      navigate("/adminDashboard");
    } else {
      try {
        // Dispatch the async thunk action creator with the required properties
        await dispatch(
          loginData({ email: form.email, password: form.password, navigate })
        );
      } catch (error) {
        console.error("Login failed:", error);
        alert(error);
      }
    }
  };

  const [isTransformed, setIsTransformed] = useState<boolean>(false);

  const handleToggleForm = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <Box
      height={"100%"}
      bg={"silver"}
      borderBottomEndRadius={"650%"}
      transition=".8s ease-in-out"
      onClick={handleToggleForm}
      paddingX={20}
      paddingY={10}
      color={"Black"}
    >
      <FormControl>
        <Heading transform={isTransformed ? "scale(.7)" : ""}>Login</Heading>
        <FormLabel transform={isTransformed ? "scale(.7)" : ""}>
          Email
        </FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormLabel transform={isTransformed ? "scale(.7)" : ""}>
          Password
        </FormLabel>
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button
          onClick={handleLogin}
          marginTop={10}
          bg="black"
          _hover={{
            color: "black",
            bg: "gray",
            fontSize: "larger",
            boxShadow: "8px 8px 8px rgb(33, 33, 33)",
          }}
          color="white"
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;