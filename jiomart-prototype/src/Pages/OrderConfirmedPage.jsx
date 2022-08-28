import React from "react";
import Navbar from "../HomePage/Navbar";
import Header from "../HomePage/Header";
import { Container, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderConfirmedPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Navbar />
      <Header />
      <Container
        minW="60%"
        h="auto"
        bg="white"
        my="10"
        // border="1px solid black"
        align="left"
        ml="10rem"
      >
        <Box fontSize="2xl" fontWeight="bold" align="left">
          Order Confirmed
        </Box>
        <Box py="5">
          <Text>Thank you for shopping at JioMart.</Text>
          <Text>
            Your order{" "}
            <Text as="span" color="green" fontWeight="700">
              {Math.floor(100000000000000 + Math.random() * 900000000000000)}
            </Text>{" "}
            is booked in JioMart.
          </Text>
          <Text>
            You can also check the details and status of your order any time in
            Your Account - Orders section in JioMart.
          </Text>
        </Box>
        <Link to="/">
          <Text color="blue" fontWeight="600" fontSize="xl">
            Back To Shopping
          </Text>
        </Link>
      </Container>
    </div>
  );
};

export default OrderConfirmedPage;
