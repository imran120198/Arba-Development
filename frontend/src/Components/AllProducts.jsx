import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  ButtonGroup,
  Image,
  Divider,
  Toast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navbar } from "./Navbar";
import { toast, ToastContainer } from "react-toastify";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  let item = [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    axios("https://arba-backend-op50.onrender.com/product/getall")
      .then((res) => {
        setData(res.data.Products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCart = (ele, id) => {
    console.log(ele);
    cart.push(ele);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast("Product Added to Cart");
  };

  cart.map((ele) => {
    item.push(Number(ele.id));
  });

  return (
    <Box>
      <Navbar />
      <Box>
        <Text fontSize={"50px"} m={"20px"}>
          Products
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {data.map((ele, i) => {
            return (
              <Card key={i}>
                <CardBody>
                  <Image
                    width={"100%"}
                    height={"200px"}
                    src={ele.image}
                    alt="nidhi"
                    borderRadius="sm"
                  />
                  <Stack mt="6" spacing="3" textAlign={"justify"}>
                    <Heading size="md">{ele.title}</Heading>
                    <Text>{ele.description}</Text>
                    <Text color="skyblue" fontSize="2xl">
                      ₹{ele.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="0">
                    {item.includes(ele.id) ? (
                      <Box alignItems={"center"}>
                        <Button>+</Button>
                        {1}
                        <Button>-</Button>
                      </Box>
                    ) : (
                      <Button
                        variant="solid"
                        backgroundColor={"teal"}
                        color="white"
                        onClick={() => handleCart(ele, i)}
                      >
                        Add To Cart
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
        <Link
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "2rem",
            color: "white",
          }}
          to={"/products"}
        >
          <Button bgColor={"skyblue"} _hover="none" mt={"30px"}>
            All Products {""}
          </Button>
        </Link>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default AllProducts;
