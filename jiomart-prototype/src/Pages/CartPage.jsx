import React, { useState } from "react";
import Header from "../HomePage/Header";
import Navbar from "../HomePage/Navbar";
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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import CartOrderPayment from "../components/CartOrderPayment";
import { useLocation } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "ONNIX KURTA PAJAMA FOR MEN",
    price: "599.00",
    strikedPrice: "2499.00",
    soldBy: "ONNIX",
    image:
      "https://www.jiomart.com/images/product/600x750/rvmoycdnw0/onnix-kurta-pajama-for-men-product-images-rvmoycdnw0-0-202205150522.jpg",
    size: "38",
    color: "Black",
  },
  {
    id: 2,
    title: "Majestic Man Men White Pure Cotton Pack of 1 Kurta",
    price: "499.00",
    strikedPrice: "1499.00",
    soldBy: "Polestar Etail",
    image:
      "https://www.jiomart.com/images/product/600x750/rv1lnaemqh/majestic-man-men-white-pure-cotton-pack-of-1-kurta-product-images-rv1lnaemqh-0-202205291026.jpg",
    size: "S",
    color: "White",
  },
  {
    id: 3,
    title: "Majestic Man Men Black Pure Cotton Pack of 1 Kurta",
    price: "499.00",
    strikedPrice: "1499.00",
    soldBy: "Koovs",
    image:
      "https://www.jiomart.com/images/product/original/rvqqrbzzsb/majestic-man-men-black-pure-cotton-pack-of-1-kurta-product-images-rvqqrbzzsb-0-202205291027.jpg",
    size: "M",
    color: "Black",
  },
  {
    id: 4,
    title: "Home One Star Blue Plastic Container 1+ 2+ 4 L (Set of 3)",
    price: "99.00",
    strikedPrice: "299.00",
    soldBy: "Reliance Retail",
    image:
      "https://www.jiomart.com/images/product/600x600/491934147/home-one-star-blue-plastic-container-1-2-4-l-set-of-3-product-images-o491934147-p590041313-0-202207081851.jpg",
  },
];

const CartPage = () => {
  const [total, setTotal] = useState(
    data.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2)
  );

  const [mrpTotal, setMRPTotal] = useState(
    data.reduce((acc, item) => acc + Number(item.strikedPrice), 0)
  );
  const [totalDiscount, setTotalDiscount] = useState(
    data.reduce((acc, item) => acc + Number(item.strikedPrice - item.price), 0)
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState(0);

  const handleCouponChange = (coupon) => {
    console.log(coupon, typeof mrpTotal);
    if (coupon === "save250") {
      setMRPTotal(mrpTotal - 250);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Flex gap="2" w="80%" m="auto" my="10">
        <Container minW="60%" h="auto" bg="white">
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
              <Box fontSize="xl" fontWeight="semibold">
                Rs.{total}
              </Box>
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
        <Container maxW="40%">
          <CartOrderPayment />
          <Container bgColor="white" my="8" borderRadius="4" p="5">
            <Flex justify="space-between" align="center">
              <Text fontSize="xl" fontWeight="bold">
                Apply Coupon
              </Text>
              <Text
                color="red"
                fontWeight="semibold"
                fontSize="sm"
                cursor="pointer"
                onClick={onOpen}
              >
                VIEW ALL
              </Text>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                // finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Select Coupons</DrawerHeader>
                  <Divider borderColor="grey" />

                  <DrawerBody>
                    <Text fontSize="lg" fontWeight="500">
                      Coupons
                    </Text>
                    <RadioGroup
                      onChange={handleCouponChange}
                      value={value}
                      my="4"
                    >
                      <Stack direction="column">
                        <Box>
                          <Radio value="save250" colorScheme="green">
                            <Text fontWeight="semibold" color="black">
                              SAVE250
                            </Text>
                          </Radio>
                          <Text pl="6">
                            Flat Rs. 250 OFF on fashion products above Rs. 999
                          </Text>
                        </Box>
                        <Divider borderColor="grey" />
                        <Box>
                          <Radio value="save1000" colorScheme="black">
                            <Text fontWeight="semibold" color="black">
                              SAVE1000
                            </Text>
                          </Radio>
                          <Text pl="6">
                            Flat Rs. 1000 OFF on Mobile & Electronics purchase
                            above Rs. 10000. Applicable once per user.
                          </Text>
                        </Box>
                        <Divider borderColor="grey" />
                        <Box>
                          <Radio value="premium200" colorScheme="red">
                            <Text fontWeight="semibold" color="black">
                              ITSPREMIUM200
                            </Text>
                          </Radio>
                          <Text pl="6">
                            Get Rs 200 off on the purchase of Premium Fruits
                            worth Rs 999
                          </Text>
                        </Box>
                        <Divider borderColor="grey" />
                        <Box>
                          <Radio value="premium100">
                            <Text fontWeight="semibold" color="black">
                              PREMIUMFRUITS100
                            </Text>
                          </Radio>
                          <Text pl="6">
                            Get Rs 100 off on the purchase of Premium Fruits
                            worth Rs 499
                          </Text>
                        </Box>
                      </Stack>
                    </RadioGroup>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
            <InputGroup my="4">
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Image
                    src="https://www.jiomart.com/msassets/images/icons/offer-grey.svg"
                    w="7"
                    h="7"
                  />
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
          <Container bgColor="white" borderRadius="4" p="3" mt="10">
            <Text align="left" fontWeight="bold" fontSize="xl" mb="5">
              Payment Details
            </Text>
            <VStack divider={<StackDivider borderColor="grey" />} align="left">
              <Flex justify="space-between" fontWeight="semibold">
                <Text>MRP Total</Text>
                <Text>₹{mrpTotal.toFixed(2)}</Text>
              </Flex>
              <Flex justify="space-between" fontWeight="semibold">
                <Text>Product Discount</Text>
                <Text>₹{totalDiscount.toFixed(2)}</Text>
              </Flex>
              <Flex justify="space-between" fontWeight="bold">
                <Text>Total Amount</Text>
                <Text>₹{total}</Text>
              </Flex>
              <Box align="right" fontWeight="semibold" color="green">
                <Text>You Save ₹{totalDiscount.toFixed(2)}</Text>
              </Box>
            </VStack>
          </Container>
          <Box align="right" my="3">
            <Button w="55%" colorScheme="teal">
              Place Order
            </Button>
          </Box>

          {/* <Box>
          <Text>MRP Total: {mrpTotal}</Text>
          <Text>Total Discount: {totalDiscount}</Text>
          <Text>Total Amount: {total}</Text>
        </Box> */}
        </Container>
      </Flex>
    </>
  );
};

export default CartPage;
