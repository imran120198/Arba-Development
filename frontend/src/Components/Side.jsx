import { Box } from "@chakra-ui/react";
import React from "react";

export function Side() {
  return (
    <Box
      bgColor={"rgb(44, 203, 203)"}
      height={"100%"}
      width={"50%"}
      display={{ base: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }}
      flexDir={"column"}
    >
      <Box h={"40%"} display={"flex"}>
        <Box
          h={"100%"}
          w={"40%"}
          borderBottomRightRadius={"100%"}
          bgColor={"rgb(1, 160, 160)"}
        ></Box>
      </Box>
      <Box h={"40%"} display={"flex"} justifyContent={"flex-end"}>
        <Box
          h={"100%"}
          w={"40%"}
          mt={119}
          borderTopLeftRadius={"100%"}
          bgColor={"rgb(1, 160, 160)"}
        ></Box>
      </Box>
    </Box>
  );
}
