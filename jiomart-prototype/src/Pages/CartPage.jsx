import React, { useState } from "react";
import {
  Container,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  StackDivider,
  Button,
  Image,
  IconButton,
  Icon,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import CartOrderPayment from "../components/CartOrderPayment";

const data = [
  {
    id: 1,
    title: "ONNIX KURTA PAJAMA FOR MEN",
    price: 599,
    strikedPrice: 2499,
    soldBy: "ONNIX",
    image:
      "https://www.jiomart.com/images/product/600x750/rvmoycdnw0/onnix-kurta-pajama-for-men-product-images-rvmoycdnw0-0-202205150522.jpg",
    size: "38",
    color: "Black",
  },
  {
    id: 2,
    title: "Majestic Man Men White Pure Cotton Pack of 1 Kurta",
    price: 499,
    strikedPrice: 1499,
    soldBy: "Polestar Etail",
    image:
      "https://www.jiomart.com/images/product/600x750/rv1lnaemqh/majestic-man-men-white-pure-cotton-pack-of-1-kurta-product-images-rv1lnaemqh-0-202205291026.jpg",
    size: "S",
    color: "White",
  },
  {
    id: 3,
    title: "Majestic Man Men Black Pure Cotton Pack of 1 Kurta",
    price: 499,
    strikedPrice: 1499,
    soldBy: "Koovs",
    image:
      "https://www.jiomart.com/images/product/original/rvqqrbzzsb/majestic-man-men-black-pure-cotton-pack-of-1-kurta-product-images-rvqqrbzzsb-0-202205291027.jpg",
    size: "M",
    color: "Black",
  },
  {
    id: 4,
    title: "Home One Star Blue Plastic Container 1+ 2+ 4 L (Set of 3)",
    price: 99,
    strikedPrice: 299,
    soldBy: "Reliance Retail",
    image:
      "https://www.jiomart.com/images/product/600x600/491934147/home-one-star-blue-plastic-container-1-2-4-l-set-of-3-product-images-o491934147-p590041313-0-202207081851.jpg",
  },
];

const CartPage = () => {
  const [total, setTotal] = useState(
    data.reduce((acc, item) => acc + item.price, 0)
  );

  const [mrpTotal, setMRPTotal] = useState(
    data.reduce((acc, item) => acc + item.strikedPrice, 0)
  );
  const [totalDiscount, setTotalDiscount] = useState(
    data.reduce((acc, item) => acc + (item.strikedPrice - item.price), 0)
  );

  return (
    <Flex gap="2" w="80%" m="auto" border="1px solid teal" my="10">
      <Container border="1px solid black" minW="60%" h="auto">
        <Box fontSize="2xl" fontWeight="bold" align="left" mb="4">
          My Cart({data.length})
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
              Basket ({data.length} Items)
            </Box>
            <Box fontWeight="semibold">Rs.{total}</Box>
          </HStack>
          <VStack divider={<StackDivider borderColor="grey" />}>
            {data.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                setTotal={setTotal}
                total={total}
                mrpTotal={mrpTotal}
                totalDiscount={totalDiscount}
                setMRPTotal={setMRPTotal}
                setTotalDiscount={setTotalDiscount}
              />
            ))}
          </VStack>
        </Container>
      </Container>
      <Container border="1px solid red" maxW="40%">
        <CartOrderPayment />
        <Container bgColor="white" my="4" borderRadius="4" p="5">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              Apply Coupon
            </Text>
            <Text
              color="red"
              fontWeight="semibold"
              fontSize="sm"
              cursor="pointer"
            >
              VIEW ALL
            </Text>
          </Flex>
          <InputGroup my="4">
            <InputLeftElement
              pointerEvents="none"
              children={
                <Image src="https://www.jiomart.com/msassets/images/icons/offer-grey.svg" />
              }
            />
            <Input variant="flushed" placeholder="Enter Coupon Code" />
            <InputRightElement
              children={
                <Text fontWeight="500" cursor="pointer">
                  Apply
                </Text>
              }
            />
          </InputGroup>
        </Container>
        {/* <Box>
          <Text>MRP Total: {mrpTotal}</Text>
          <Text>Total Discount: {totalDiscount}</Text>
          <Text>Total Amount: {total}</Text>
        </Box> */}
      </Container>
    </Flex>
  );
};

export default CartPage;
