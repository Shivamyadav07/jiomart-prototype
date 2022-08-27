import React, { useState, useEffect } from "react";
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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Stack,
  RadioGroup,
  Radio,
  Spinner,
} from "@chakra-ui/react";
import CartOrderPayment from "../components/CartOrderPayment";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCartData } from "../Redux/CartReducer/action";
import { useDisclosure } from "@chakra-ui/react";
import Header from "../HomePage/Header";
import Navbar from "../HomePage/Navbar";

const OrderSummaryPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [singleAddress, setSingleAddress] = useState({
    name: "",
    house: "",
    floor: "",
    tower: "",
    building: "",
    address: "",
    landmark: "",
    pin: "",
    city: "",
    mobile: "",
  });
  const [value, setValue] = useState({});
  const cartData = useSelector((store) => store.cartReducer.cartData);
  const loading = useSelector((store) => store.cartReducer.isLoading);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(location);
  const mrpTotal = cartData?.reduce(
    (acc, item) => acc + Number(item.mrp * item.count),
    0
  );
  const totalDiscount = cartData?.reduce(
    (acc, item) =>
      acc + (Number(item.mrp) - Number(item.price)) * item.count,
    0
  );

  const handleAddAddress = () => {
    console.log(singleAddress);
    setAddresses([...addresses, singleAddress]);
    onClose();
  };

  const handleSelectAddress = (e) => {
    // setValue();
    console.log("SA:", e);
  };

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        m="50vw"
      />
    );
  }

  return (
    <div style={{"paddingTop":"80px"}}>
    <Navbar/>  
    <Header/>
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
            <Text fontSize="lg" fontWeight="500">
              Select Delevery Address
            </Text>
            {addresses.length !== 0 && (
              <RadioGroup onChange={handleSelectAddress} value={value}>
                <Stack direction="column">
                  {addresses.map((add) => (
                    <Box key={add.name} my="4" bgColor="#f5f5f5" p="4" w="md">
                      <Radio value={add.name}>
                        <Text fontSize="lg" fontWeight="bold" pl="2">
                          {add.name}
                        </Text>
                      </Radio>
                      <Box pl="8" fontWeight="semibold">
                        <Text>{add.building},</Text>
                        <Text>{add.floor},</Text>
                        <Text>{add.tower},</Text>
                        <Text>{add.address},</Text>
                        <Text>{add.city},</Text>
                        <Text>{add.landmark},</Text>
                        <Text>
                          {add.city} - {add.pin},
                        </Text>
                        <Text>+91 - {add.mobile}</Text>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </RadioGroup>
            )}
            <Button w="40%" colorScheme="teal" my="3" onClick={onOpen}>
              Add Address
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Add Address</DrawerHeader>

                <DrawerBody>
                  <Text fontSize="lg" fontWeight="500" mb="3">
                    Address Details
                  </Text>
                  <Stack spacing={3}>
                    <Input
                      type="number"
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          pin: e.target.value,
                        })
                      }
                      placeholder="Pin Code *"
                    />
                    <Input
                      type="number"
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          house: e.target.value,
                        })
                      }
                      placeholder="Flat / House No."
                    />
                    <Input
                      type="number"
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          floor: e.target.value,
                        })
                      }
                      placeholder="Floor No."
                    />
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          tower: e.target.value,
                        })
                      }
                      placeholder="Tower No."
                      type="number"
                    />
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          building: e.target.value,
                        })
                      }
                      placeholder="Building / Apartment Name"
                      type="text"
                    />
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          address: e.target.value,
                        })
                      }
                      placeholder="Address *"
                      type="text"
                    />
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          landmark: e.target.value,
                        })
                      }
                      placeholder="Landmark / Area *"
                      type="text"
                    />
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          city: e.target.value,
                        })
                      }
                      placeholder="City,State"
                      type="text"
                    />
                    <Text fontSize="lg" fontWeight="500" mb="3">
                      Delevery Contact Details
                    </Text>
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          name: e.target.value,
                        })
                      }
                      placeholder="Name *"
                      type="text"
                    />
                    <Input
                      onChange={(e) =>
                        setSingleAddress({
                          ...singleAddress,
                          mobile: e.target.value,
                        })
                      }
                      placeholder="Mobile Number *"
                      type="tel"
                    />
                  </Stack>
                </DrawerBody>

                <DrawerFooter>
                  <Button
                    w="full"
                    colorScheme="blue"
                    onClick={handleAddAddress}
                  >
                    Save Adderess
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Container>

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
            <Link to={{ pathname: "/payment" }}>
              <Button w="55%" colorScheme="teal">
                Make Payment
              </Button>
            </Link>
          </Box>
        </Container>
      </Flex>
    </div>
  );
};

export default OrderSummaryPage;
