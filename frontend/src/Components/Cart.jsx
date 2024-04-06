import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const handleInc = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count++;
    setCart(updatedCart);
  };

  const handleDec = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count--;
      setCart(updatedCart);
    }
  };

  return (
    <>
      <Navbar />
      <Box p="10">
        <Text fontSize={"28px"} fontWeight={"bold"}>
          My Cart
        </Text>
        <Box p="20">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
            {cart.length > 0 &&
              cart.map((item, i) => (
                <Card key={i}>
                  <CardBody>
                    <Image
                      src={item.image}
                      alt="image"
                      h={"200px"}
                      w={"100%"}
                      borderRadius="sm"
                    />
                    <Stack mt="6" spacing="3" textAlign={"justify"}>
                      <Heading size="md">{item.title}</Heading>
                      <Text>{item.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        ₹{item.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup>
                      <Box alignItems={"center"} gap={"10px"}>
                        <Button onClick={() => handleDec(i)}>-</Button>
                        {1}
                        <Button onClick={() => handleInc(i)}>+</Button>
                      </Box>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
          </SimpleGrid>
        </Box>
        <Box float="right" p="1">
          <Button backgroundColor={"teal"} color="white">
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
