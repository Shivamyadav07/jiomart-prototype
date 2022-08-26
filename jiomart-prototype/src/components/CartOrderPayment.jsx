import React from "react";
import { Flex, Icon, Divider } from "@chakra-ui/react";
import { AiFillCreditCard } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const CartOrderPayment = () => {
  const location = useLocation();

  return (
    <Flex justify="space-between" align="center">
      <Flex align="center" fontSize="sm" fontWeight="500">
        <Icon
          as={FaShoppingCart}
          w="6"
          h="6"
          mr="2"
          color={
            location.pathname === "/cart" || location.pathname === "/order"
              ? "teal"
              : "grey"
          }
        />{" "}
        Your Cart
      </Flex>
      <Divider w="3rem" borderColor="black" />
      <Flex align="center" fontSize="sm" fontWeight="500">
        <Icon
          as={RiTodoFill}
          w="6"
          h="6"
          mr="2"
          color={location.pathname === "/order" ? "teal" : "#ACACAD"}
        />{" "}
        Order Summary
      </Flex>
      <Divider w="3rem" borderColor="black" />
      <Flex align="center" fontSize="sm" fontWeight="500">
        <Icon as={AiFillCreditCard} w="6" h="6" mr="2" color="#ACACAD" />{" "}
        Payment
      </Flex>
    </Flex>
  );
};

export default CartOrderPayment;
