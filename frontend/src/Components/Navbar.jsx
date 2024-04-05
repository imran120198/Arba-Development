import React from "react";
import { Logo } from "../Components/Logo";
import {
  Box,
  Flex,
  Avatar,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export function Navbar() {
  let cart = JSON.parse(localStorage.getItem("cart")) || 0;
  return (
    <Flex
      p={"0px 200px"}
      zIndex={700}
      w={"100%"}
      boxShadow="sm"
      height={"90px"}
      alignItems={"center"}
      justifyContent="space-between"
      bgColor={"white"}
      position={"sticky"}
      top={0}
    >
      <Logo />

      <Flex gap={"50px"} alignItems={"center"}>
        <Box>
          <Menu>
            <MenuButton>
              <Flex alignItems={"center"} color="white" gap={2}>
                <Box position={"relative"}>
                  <Link to={"/cart"}>
                    <FaShoppingCart color={"black"} size={"25px"} />
                  </Link>
                </Box>
              </Flex>
            </MenuButton>

            <MenuList color={"skyblue"} fontWeight="800px">
              <MenuItem>
                <Link to={"/"}>
                  <Text ml={2}>My Store</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/profile"}>
                  <Text ml={2}>Profile</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/"}>
                  <Text ml={2}>LogOut</Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Flex alignItems={"center"} color="white" gap={2}>
          <Avatar
            size={"sm"}
            src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
