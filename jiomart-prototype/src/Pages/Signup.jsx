import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getauth, postauth } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { getLocalData } from "../utilis/localStorage";
import { useNavigate } from "react-router-dom";
import Header from "../HomePage/Header";

const Signup = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.authreducer.token);
  const [userinput, setuserinput] = useState({});
  const [savedata, setsavedata] = useState({});
  let phono = getLocalData("Phone");
  const navigate=useNavigate()

  const handleuserchange = (e) => {
    const { name, value } = e.target;
    setuserinput({ ...userinput, phnop: phono, [name]: value });
    // console.log(userinput)
  };

  const handleformsubmit = (e) => {
    e.preventDefault();
    if (userinput.password === userinput.repassword) {
      dispatch(postauth(userinput))
      alert("signup successfull")
      navigate("/login")
    } else {
      alert("password dosn't match");
    }
  };

  useEffect(() => {
    dispatch(getauth());
  }, []);

  //  console.log(users)
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [show2, setShow2] = React.useState(false);
  const handlepasswordClick = () => setShow2(!show2);

  return (
    <Box>
    <Box >
    <Header />
  </Box>
    <Box m="200px">
      <Flex  gap="150px">
        <Box >
          <Image borderRadius="10px 0px 0px 0px"
            src="https://www.jiomart.com/msassets/images/login-banner.jpg"
            alt="image"
          />
        </Box>
        <form onSubmit={handleformsubmit}>
          <Text fontSize="2xl" fontWeight="semibold" color="black" pb="6px" mt="20px">Sign up</Text>
          <Text pb="40px" fontSize="sm" color="#978871" fontWeight="medium">Please enter your details.</Text>
          <Stack mb="35px" spacing={10}>
            <Input
              variant="outline"
              placeholder="Your First Name"
              name="fistname"
              onChange={handleuserchange}
            />
            <Input
              variant="outline"
              placeholder="Your Last Name"
              name="lastname"
              onChange={handleuserchange}
            />
            <Input
            
              variant="outline"
              placeholder="Enter your Email Id"
              name="email"
              onChange={handleuserchange}
            />
               </Stack>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                onChange={handleuserchange}
                type={show ? "text" : "password"}
                placeholder="Enter your password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              
              </InputRightElement>
             
            </InputGroup>
            <Text fontSize="13px" color="##e3c6b0">Use 8 or more characters with a mix of letters & numbers</Text>
       
         
           
           

            <InputGroup  mt="30px"  size="md">
              <Input
                pr="4.5rem"
                name="repassword"
                onChange={handleuserchange}
                type={show2 ? "text" : "password"}
                placeholder="Enter your password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleuserchange}>
                  {show2 ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          
          <Checkbox mt="35px" defaultChecked>Enable order updates and important information on Whatsapp</Checkbox>
          <Text fontSize="2xl" fontWeight="semibold" color="black" mt="35px">Verify</Text>
          <Text fontSize="13px"  color="#
#e3c6b0">We have sent 6 digit OTP on <span style={{color:"black",fontWeight:"bolder"}}>{phono} </span></Text>
          <Input
          mt="35px"
            variant="outline"
            placeholder="Enter your OTP"
            name="otp"
            onChange={handleuserchange}
          />
          <Button w="100%" mt="30px"   _hover={{
    background: "008ecc",
    color: "white",
  }} bg="#008ecc" color="white" type="submit">Verify</Button>
        </form>
      </Flex>
      <Box textAlign="center" pt="50px">
        <Text fontSize="small" fontWeight="normal">
          By continuing you agree to our <span style={{color:"red"}}>Terms of service</span>
        </Text>
        <Text fontSize="small" >
          and <span style={{color:"red"}}>Privacy & Legal Policy.</span>
        </Text>
      </Box>
    </Box>
    </Box>
  );
};

export default Signup;
