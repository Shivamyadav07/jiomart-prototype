import { Box, Button, Flex, Image, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getauth } from '../Redux/AuthReducer/action';
import { saveLocalData } from '../utilis/localStorage';
import styles from "./Login.module.css"

const Login = () => {
  
  const users=useSelector((store)=>store.authreducer.token)
  const [phno,setphno]=useState("")
  const [otp,setotp]=useState("")
  const dispatch=useDispatch();
const [toggle,settoggle]=useState(false)
const navigate=useNavigate();

  useEffect(() => {
    dispatch(getauth())
  
   
  }, [])
  
  const handleangle=()=>{
    users.map((e)=>{
      
      if(e.phnop==(phno))
      {
   
        settoggle(!toggle)
        

      }
      else{
        saveLocalData("Phone",phno)
        navigate("Signup")
      }
    })
  }
  const handlesignin=(e)=>{
e.preventDefault();
let count=0
users.map((e)=>{
  if(e.phnop==(phno) && e.otp==otp)
  {
  //  return alert("login success")
   count++;
  }

   
})
if(count>=1)
{
 alert("login successfull")
}
else
{
 alert("login failed")
}

  }



  return (
    <Box>
    <Flex>
        <Box>
           <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' alt='image'/>
        </Box>
        <form onSubmit={handlesignin}>
            <Text>Sign in</Text>
            <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
            <InputGroup>
       <InputLeftAddon children='+91' />
       <Input type='tel' placeholder='Enter your mobile no' value={phno} onChange={(e)=>setphno(e.target.value)}/>
       </InputGroup>
       {/* <Button>></Button>
        */}
        <BsChevronRight className={toggle?styles.otpbox : styles.otpboxdisplay}   onClick={handleangle}/>
        <Box className={toggle?styles.otpboxdisplay : styles.otpbox}>
        <Input type='number' placeholder='Enter your OTP' value={otp} onChange={(e)=>setotp(e.target.value)} />
        <Button type='submit'>Verify</Button>
        </Box>
        </form>
    </Flex>
    <Box>
        <Text>By continuing you agree to our <span>Terms of service</span></Text>
        <Text>and <span>Privacy & Legal Policy.</span></Text>
    </Box>
    </Box>
  )
}

export default Login