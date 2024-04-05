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

const Home = () => {
  const [data, setData] = useState([]);

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
          {data?.map((ele, i) => {
            return (
              <Card key={i}>
                <CardBody>
                  <Image
                    width={"100%"}
                    height={"200px"}
                    src={ele.image}
                    alt="image"
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
                    <Button variant="solid" backgroundColor="skyblue">
                      Add To Cart
                    </Button>
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
    </div>
  );
};

export default Home;
