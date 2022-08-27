import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { BsChevronRight } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../HomePage/Header";
import { getauth } from "../Redux/AuthReducer/action";
import { saveLocalData } from "../utilis/localStorage";
import styles from "./Login.module.css";

const Login = () => {
  const users = useSelector((store) => store.authreducer.token);
  const [phno, setphno] = useState("");
  const [otp, setotp] = useState("");
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState(false);
  const navigate = useNavigate();
  let count=0
  // console.log(users);
  useEffect(() => {
    dispatch(getauth());
  }, [dispatch]);

  const handleangle = () => {
  
    users.map((e) => {
      if (e.phnop == phno) {
        
        
        count++;
        return 
        
      }
    })
    
    if(count>=1)
    {
      settoggle(!toggle);

    }
    else{
      saveLocalData("Phone", phno);
      navigate("/signup");
    }
  };
  const handlesignin = (e) => {
    e.preventDefault();
  
    users.map((e) => {
      if (e.phnop == phno && e.otp == otp) {
        //  return alert("login success")
        count++;
      }
    });
    if (count >= 1) {
      alert("login successfull");
      navigate("/")
    } else {
      alert("login failed");
    }
  };

  return (
   <Box>
   <Box >
     <Header />
   </Box>
    <Box m="200px"  >
     
      <Flex   gap="150px">
        <Box>
          <Image borderRadius="10px 0px 0px 10px"
            src="https://www.jiomart.com/msassets/images/login-banner.jpg"
            alt="image"
          />
        </Box>
        <form onSubmit={handlesignin}>
          <Text fontSize="2xl" fontWeight="semibold" color="black" pb="6px" mt="20px">Sign in</Text>
          <Text pb="60px" fontSize="sm" color="#978871" fontWeight="medium">Sign in to access your Orders, Offers and Wishlist.</Text>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              placeholder="Enter your mobile no"
              value={phno}
              onChange={(e) => setphno(e.target.value)}
            />
          </InputGroup>
          {/* <Button>></Button>
           */}
          <IoIosArrowDroprightCircle
          style={{color:"#008ecc",fontSize:"70px",cursor:"pointer",margin:"25px 0px 0px 180px"}}
            className={toggle ? styles.otpbox : styles.otpboxdisplay}
            onClick={handleangle}
          />
          <Box className={toggle ? styles.otpboxdisplay : styles.otpbox}>
            <Input
            mt="30px"
            w="100%"
              type="number"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setotp(e.target.value)}
            />
            <Button w="100%" mt="30px"   _hover={{
    background: "008ecc",
    color: "white",
  }} bg="#008ecc" color="white" type="submit">Verify</Button>
          </Box>
        </form>
      </Flex>
      <Box textAlign="center" pt="20px">
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

export default Login;
