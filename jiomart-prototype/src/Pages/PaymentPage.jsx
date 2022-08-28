import React from "react";
import Navbar from "../HomePage/Navbar";
import Header from "../HomePage/Header";
import {
  Flex,
  Container,
  Box,
  Text,
  VStack,
  StackDivider,
  Radio,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  console.log("PaymentLocation:", location);
  return (
    <div style={{ paddingTop: "80px" }}>
      <Navbar />
      <Header />
      <Flex gap="2" w="80%" m="auto" my="10">
        <Container minW="60%" h="auto" bg="white">
          <Box fontSize="2xl" fontWeight="bold" align="left" mb="4">
            Payment Details
          </Box>
          <Container
            bgColor="white"
            h="max-content"
            minW="100%"
            borderRadius="4"
            py="7"
            my="3"
          >
            <Flex align="center">
              <Radio></Radio>
              <Flex ml="3">
                <Image src="https://www.jiomart.com/msassets/images/jio-money.png" />
                <Text ml="3">Jio Pay</Text>
              </Flex>
              <Link to={{ pathname: "/orderplaced" }}>
                <Button ml="10" w="100%" colorScheme="teal">
                  Pay ₹
                  {(
                    location.state.mrpTotal -
                    location.state.totalDiscount -
                    location.state.coupDiscount
                  ).toFixed(2)}
                </Button>
              </Link>
            </Flex>
          </Container>
        </Container>
        <Container maxW="40%">
          <Container bgColor="white" borderRadius="4" p="3" mt="10">
            <Text align="left" fontWeight="bold" fontSize="xl" mb="5">
              Payment Details
            </Text>
            <VStack divider={<StackDivider borderColor="grey" />} align="left">
              <Flex justify="space-between" fontWeight="semibold">
                <Text>MRP Total</Text>
                <Text>₹{location.state.mrpTotal.toFixed(2)}</Text>
              </Flex>
              <Flex justify="space-between" fontWeight="semibold">
                <Text>Product Discount</Text>
                <Text>₹{location.state.totalDiscount.toFixed(2)}</Text>
              </Flex>
              {location.state.coupDiscount !== 0 && (
                <Flex justify="space-between" fontWeight="semibold">
                  <Text>Coupon Discount</Text>
                  <Text>₹{location.state.coupDiscount}</Text>
                </Flex>
              )}
              <Flex justify="space-between" fontWeight="bold">
                <Text>Total Amount</Text>
                <Text>
                  ₹
                  {(
                    location.state.mrpTotal -
                    location.state.totalDiscount -
                    location.state.coupDiscount
                  ).toFixed(2)}
                </Text>
              </Flex>
              <Box align="right" fontWeight="semibold" color="green">
                <Text>
                  You Save ₹
                  {(
                    location.state.totalDiscount + location.state.coupDiscount
                  ).toFixed(2)}
                </Text>
              </Box>
            </VStack>
          </Container>
        </Container>
      </Flex>
    </div>
  );
};

export default PaymentPage;
