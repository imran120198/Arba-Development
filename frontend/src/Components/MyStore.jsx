import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Category from "./Category";
import StoreProduct from "./StoreProduct";
import { Flex, Box } from "@chakra-ui/react";

const MyStore = () => {
  const [showCategories, setShowCategories] = useState(true);

  return (
    <div>
      <Navbar />
      <h1
        style={{ textAlign: "center", fontWeight: "bolder", fontSize: "40px" }}
      >
        My Store
      </h1>
      <br />
      <br />
      <Flex
        border={"1px"}
        w={"80%"}
        m={"auto"}
        fontSize={"20px"}
        fontWeight={"bold"}
      >
        <Box
          border={"1px"}
          w={"50%"}
          textAlign={"center"}
          cursor={"pointer"}
          onClick={() => setShowCategories(true)}
          backgroundColor={showCategories ? "teal" : ""}
        >
          Category
        </Box>
        <Box
          border={"1px"}
          w={"50%"}
          textAlign={"center"}
          cursor={"pointer"}
          onClick={() => setShowCategories(false)}
          backgroundColor={!showCategories ? "teal" : ""}
        >
          Product
        </Box>
      </Flex>
      <br />
      {showCategories ? <Category /> : <StoreProduct />}
    </div>
  );
};

export default MyStore;
