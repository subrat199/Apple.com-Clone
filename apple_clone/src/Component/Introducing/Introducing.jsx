import React from "react";
import "./Intoducing.css";
import { Button, Box, background } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Middle from "./Middle";
import Carousel from "./../Carousel";
import Footer from './../Footer';
const Introducing = () => {
  return (
    <div className="introducing">
      <p class="intro">
        Introducing the new <br /> MacBook Pro and Mac mini.
      </p>
      <Button class="button">
        <a href="https://www.youtube.com/watch?v=OushE7mq0Ak">
          Watch The Announcment
        </a>
      </Button>
      <p style={{ color: "white", fontSize: "large", marginTop: "50px" }}>
        {" "}
        <a href="https://www.apple.com/macbook-pro-14-and-16/">
          Supercharged by M2 Pro and M2 Max
        </a>{" "}
      </p>
      <p style={{ color: "grey", fontSize: "larger", marginTop: "10px" }}>
        {" "}
        <a href="https://www.apple.com/macbook-pro-14-and-16/">
          Available Starting 24 Jan
        </a>
      </p>
      <Button
        colorScheme="black"
        variant="link"
        marginTop={"10px"}
        color={"lightblue"}
      >
        Order Now
      </Button>
      <Box boxSize="lr" bg={"black"}>
        <Image
          src="https://www.apple.com/v/macbook-pro-14-and-16/d/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg"
          alt="Dan Abramov"
          w={"60%"}
          margin={"auto"}
        />
        <p style={{ color: "white", fontSize: "large", marginTop: "20px" }}>
          {" "}
          <a href="https://www.apple.com/macbook-pro-14-and-16/">
            Supercharged by M2 Pro and M2 Max
          </a>{" "}
        </p>
        <p style={{ color: "grey", fontSize: "larger", marginTop: "10px" }}>
          {" "}
          <a href="https://www.apple.com/macbook-pro-14-and-16/">
            Available Starting 24 Jan
          </a>
        </p>
        <Button
          colorScheme="black"
          variant="link"
          marginTop={"10px"}
          color={"lightblue"}
        >
          Order Now
        </Button>
        <Image
          src="https://9to5mac.com/wp-content/uploads/sites/6/2022/10/mac-mini-m2.jpg?quality=82&strip=all&w=960"
          alt="Dan Abramov"
          w={"60%"}
          margin={"auto"}
        />
      </Box>
      <Middle />
      <Carousel />
      <Footer/>
    </div>
  );
};

export default Introducing;
