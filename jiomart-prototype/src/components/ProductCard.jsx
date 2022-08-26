import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Flex, Box, Image, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { updateCartData } from "../Redux/CartReducer/action";
import { useLocation } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);
  const location = useLocation();
  const handleDecrease = (product) => {
    setCount(() => count - 1);
    console.log("product", product);
    const payload = { count: product.count - 1 };
    dispatch(updateCartData(product.id, payload));
  };

  const handleIncrease = (product) => {
    setCount(() => count + 1);
    console.log("product", product);
    const payload = {
      count: product.count + 1,
    };
    dispatch(updateCartData(product.id, payload));
  };
  return (
    <Flex my="3" w="100%" h="max-content">
      <Box w="25%" h="12rem">
        <Image w="100%" h="100%" fit="contain" src={item.image} />
      </Box>
      <Box w="75%" px="2" h="max-content">
        <Text align="left" mb="3" fontWeight="semibold" fontSize="md">
          {item.title}
        </Text>
        <Flex my="3" align="center">
          <Text fontWeight="semibold" fontSize="xl">
            {`₹ ${(item.price * item.count).toFixed(2)}`}
          </Text>
          <Text as="s" mx="2">
            {`₹ ${(item.strikedPrice * item.count).toFixed(2)}`}
          </Text>
          <Text color="green" fontWeight="semibold">
            {`You Save ₹ ${(
              (item.strikedPrice - item.price) *
              item.count
            ).toFixed(2)}`}
          </Text>
        </Flex>
        {item.size && (
          <Flex>
            <Text align="left">{`Size: ${item.size} / `}</Text>

            <Text>Color: {item.color}</Text>
          </Flex>
        )}
        <Flex my="3" align="center">
          <Text fontSize="sm">Sold By</Text>
          <Text color="green" ml="2" fontWeight="semibold">
            {item.soldBy}
          </Text>
        </Flex>
        {location.pathname === "/cart" && (
          <Flex justify="space-between">
            <Text cursor="pointer">SAVE FOR LATER</Text>
            <Flex align="center">
              <IconButton
                colorScheme="teal"
                aria-label="Call Segun"
                size="md"
                borderRadius="50%"
                icon={<MinusIcon />}
                disabled={item.count === 1}
                onClick={() => handleDecrease(item)}
              />
              <Text px="4">{count}</Text>
              <IconButton
                colorScheme="teal"
                aria-label="Call Segun"
                size="md"
                borderRadius="50%"
                icon={<AddIcon />}
                onClick={() => handleIncrease(item)}
              />
            </Flex>
          </Flex>
        )}

        {location.pathname === "/order" && <Text>Qty: {item.count}</Text>}
      </Box>
    </Flex>
  );
};

export default ProductCard;
