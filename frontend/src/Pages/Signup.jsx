import { Box, Button, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Side } from "../Components/Side";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://arba-backend-op50.onrender.com/user/signup", form)
      .then((res) => {
        console.log(res.data);
        toast("Signup Successfull");
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
                  type="text"
                  borderBottom="2px solid skyblue"
                  placeholder="Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />{" "}
                <br />
                <Input
                  type="text"
                  borderBottom="2px solid skyblue"
                  placeholder="FullName"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                />{" "}
                <br />
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
                    type="password"
                    mt={2}
                    placeholder="Password"
                    borderBottom="2px solid skyblue"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <br />
                </InputGroup>
                <Button
                  mt={3}
                  _hover="none"
                  width={"full"}
                  bgColor="rgb(44, 203, 203)"
                  type="submit"
                >
                  Register
                </Button>
              </form>

              <h5>
                Already have an account?{" "}
                <Link to={"/"} style={{ color: "skyblue" }}>
                  Login
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

export default Signup;
