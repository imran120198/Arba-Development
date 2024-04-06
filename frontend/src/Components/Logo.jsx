import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Box>
      <Button bgColor={"rgb(44, 203, 203)"} color="white">
        <Link to="/home">Logo</Link>
      </Button>{" "}
    </Box>
  );
};
