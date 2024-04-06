import React, { useState } from "react";
import axios from "axios";
import { Box, InputGroup, Stack, Input, Button, Text } from "@chakra-ui/react";
import { Side } from "../Components/Side";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setIsFormFilled(form.email !== "" && form.password !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://arba-backend-op50.onrender.com/user/login", form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        toast("Login Successful");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Box>
        <Box
          m={"auto"}
          boxShadow={"md"}
          width={{ base: "96%", sm: "50%", md: "72%", lg: "68%", xl: "53%" }}
          h={"90vh"}
          mt={10}
          display={"flex"}
        >
          <Side />
          <Box
            gap={5}
            padding={{ base: 4, sm: 6, md: 6, lg: 8, xl: 10 }}
            display={"flex"}
            alignItems={"center"}
            flexDir={"column"}
            justifyItems={"center"}
            w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
          >
            <div
              style={{
                width: "70px",
                height: " 70px",
                backgroundColor: "rgb(30, 173, 173)",
                borderRadius: "100%",
              }}
            ></div>
            <Stack spacing={4}>
              <Text fontSize={30} fontWeight={600}>
                APP NAME
              </Text>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</p>
              <form onSubmit={handleSubmit}>
                <Input
                type="email"
                  borderBottom="2px solid skyblue"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />{" "}
                <br />
                <InputGroup>
                  <Input
                    mt={2}
                    type="password"
                    placeholder="Password"
                    borderBottom="2px solid skyblue"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <br />
                </InputGroup>
                <Link to="/home">
                  <Button
                    mt={3}
                    _hover="none"
                    width={"full"}
                    bgColor="rgb(44, 203, 203)"
                    type="submit"
                    disabled={!isFormFilled}
                  >
                    Login
                  </Button>
                </Link>
              </form>

              <h5>
                Don't have an account?{" "}
                <Link to={"/signup"} style={{ color: "skyblue" }}>
                  Signup
                </Link>
              </h5>
            </Stack>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default Login;
