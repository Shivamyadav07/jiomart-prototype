import React, { useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Container,
  HStack,
  VStack,
  StackDivider,
  Text,
  Button,
} from "@chakra-ui/react";
import CartOrderPayment from "../components/CartOrderPayment";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link as Link, useLocation } from "react-router-dom";
import { getCartData } from "../Redux/CartReducer/action";

const OrderSummaryPage = () => {
  const cartData = useSelector((store) => store.cartReducer.cartData);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const mrpTotal = cartData?.reduce(
    (acc, item) => acc + Number(item.strikedPrice * item.count),
    0
  );
  const totalDiscount = cartData?.reduce(
    (acc, item) =>
      acc + (Number(item.strikedPrice) - Number(item.price)) * item.count,
    0
  );

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  return (
    <>
      <Box w="full" h="5rem" bgColor="#008ECC" pl="10rem" py="1rem">
        <Image src="https://www.jiomart.com/msassets/jiomart_logo_beta.svg" />
      </Box>
      <Flex gap="2" w="80%" m="auto" my="10">
        <Container minW="60%" h="auto" bg="white">
          <Box fontSize="2xl" fontWeight="bold" align="left" mb="4">
            Order Summary
          </Box>
          <Container
            bgColor="white"
            h="max-content"
            minW="100%"
            borderRadius="4"
            py="0.5"
            my="3"
          >
            <HStack justify="space-between" my="4">
              <Box fontSize="md" fontWeight="semibold">
                Basket ({cartData?.length} Items)
              </Box>
              <Box fontSize="xl" fontWeight="semibold">
                Rs.{(mrpTotal - totalDiscount).toFixed(2)}
              </Box>
            </HStack>
            <VStack divider={<StackDivider borderColor="grey" />}>
              {cartData?.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </VStack>
          </Container>
        </Container>
        <Container maxW="40%">
          <CartOrderPayment />
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
          <Box align="right" my="3">
            <Link
              as={Link}
              //   to={{
              //     pathname: "/order",
              //     state: {
              //       mrpTotal: mrpTotal,
              //       totalDiscount: totalDiscount,
              //       coupDiscount: coupDiscount,
              //     },
              //   }}
              to={{ pathname: "/payment" }}
            >
              <Button w="55%" colorScheme="teal">
                Make Payment
              </Button>
            </Link>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default OrderSummaryPage;
