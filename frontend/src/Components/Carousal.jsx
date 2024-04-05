import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Image, Img } from "@chakra-ui/react";
const Carousel = () => {
  let Images = [
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [imagee, setImage] = useState(0);
  const Total = Images.length;

  const prev = () => {
    setImage(imagee === 0 ? Total - 1 : imagee - 1);
  };
  const next = () => {
    setImage(imagee === Total - 1 ? 0 : imagee + 1);
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const slider = () => {
    slideInterval = setInterval(next, intervalTime);
  };

  useEffect(() => {
    setImage(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slider();
    }
    return () => clearInterval(slideInterval);
  }, [imagee]);
  return (
    <Box w={"90%"} m={"auto"}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
        }}
      >
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            color: "grey",
            fontSize: "40px",
            left: "5%",
          }}
        >
          {"<"}
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            color: "grey",
            fontSize: "40px",
            right: "4%",
          }}
        >
          {">"}
        </button>
        {Images.map((slide, index) => {
          return (
            <Box key={index}>
              <Box>
                {index === imagee && (
                  <Img
                    src={slide.image}
                    alt="img"
                    width={"100%"}
                    height={"400px"}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </div>
    </Box>
  );
};

export default Carousel;
