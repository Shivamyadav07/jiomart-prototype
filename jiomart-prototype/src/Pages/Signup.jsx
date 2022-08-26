import { Box, Button, Checkbox, Flex, FormControl, Image, Input, InputGroup, InputRightElement, Stack, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
import { getauth, postauth } from '../Redux/AuthReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalData } from '../utilis/localStorage'

const Signup = () => {
  const dispatch=useDispatch();
  const users=useSelector((store)=>store.authreducer.token)
const [userinput, setuserinput] = useState({})
const [savedata,setsavedata] = useState({})
let phono=getLocalData("Phone")

const handleuserchange=(e)=>{
 const {name,value}=e.target;
 setuserinput({...userinput,
  phnop:phono,
[name]:value,
})
console.log(userinput)

}

const handleformsubmit=(e)=>{
  e.preventDefault()
  if(userinput.password===userinput.repassword)
  {
    // dispatch(postauth(userinput))

  }
  else{
    alert("password dosn't match")
  }
  
 
}

  


  useEffect(() => {
    dispatch(getauth())
  
   
  }, [])
  
  //  console.log(users)
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [show2, setShow2] = React.useState(false)
    const handlepasswordClick = () => setShow2(!show2)
  
  return (
<Box>
    <Flex>
        <Box>
            <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' alt='image'/>
        </Box>
        <form onSubmit={handleformsubmit}>
            <Text>Sign up</Text>
            <Text>Please enter your details.</Text>
            <Stack spacing={3}>
              
  <Input variant='outline' placeholder='Your First Name' name='fistname'  onChange={handleuserchange} />
  <Input variant='outline' placeholder='Your Last Name' name='lastname' onChange={handleuserchange} />
  <Input variant='outline' placeholder='Enter your Email Id' name='email' onChange={handleuserchange} />
  <InputGroup size='md'>
      <Input
        pr='4.5rem'
        name='password'
        onChange={handleuserchange}
        type={show ? 'text' : 'password'}
        placeholder='Enter your password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? <ViewOffIcon/> : <ViewIcon/>}
        </Button>
      </InputRightElement>
     
      
    </InputGroup>
    <Text>Use 8 or more characters with a mix of letters & numbers</Text>
  
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        name='repassword'
        onChange={handleuserchange}
        type={show2 ? 'text' : 'password'}
        placeholder='Enter your password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleuserchange}>
          {show2 ? <ViewOffIcon/> : <ViewIcon/>}
        </Button>
      </InputRightElement>
     
      
    </InputGroup>
  

</Stack>
<Checkbox defaultChecked>Checkbox</Checkbox>
<Text>Verify</Text>
<Text>We have sent 6 digit OTP on {phono} </Text>
<Input variant='outline' placeholder='Enter your OTP' name='otp' onChange={handleuserchange}  />
<Button type='submit'>Verify</Button>
        </form>

    </Flex>
</Box>
  )
}

export default Signup