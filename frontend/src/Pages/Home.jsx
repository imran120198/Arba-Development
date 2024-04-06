import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Tc } from "../Components/T&C";
import Carousel from "../Components/Carousal";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios("https://arba-backend-op50.onrender.com/product/getall")
      .then((res) => {
        setData(res.data.Products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Tc />
        <Carousel />
      </div>
      <Box mt={"50px"}>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={"30px"}>
          {data?.map((product, i) => {
            const isInCart = cart.some((item) => item.id === product.id);
            return (
              <Card key={i}>
                <CardBody>
                  <Image
                    width={"100%"}
                    height={"200px"}
                    src={product.image}
                    alt="image"
                    borderRadius="sm"
                  />
                  <Stack mt="6" spacing="3" textAlign={"justify"}>
                    <Heading size="md">{product.title}</Heading>
                    <Text>{product.description}</Text>
                    <Text color="skyblue" fontSize="2xl">
                      ₹{product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="0">
                    {isInCart ? (
                      <Box alignItems={"center"}>
                        <Button
                          onClick={() => setCount(Math.max(count - 1, 1))}
                        >
                          -
                        </Button>
                        {count}
                        <Button onClick={() => setCount(count + 1)}>+</Button>
                      </Box>
                    ) : (
                      <Button
                        variant="solid"
                        backgroundColor={"teal"}
                        color="white"
                        onClick={() => {
                          setCart([...cart, product]); // Adding the product to cart state
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, product])
                          ); // Updating localStorage
                          toast("Product Added to Cart");
                        }}
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
    </div>
  );
};

export default Home;
