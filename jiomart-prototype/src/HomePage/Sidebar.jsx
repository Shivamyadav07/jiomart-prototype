import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons';

import {
    Container,
    Text,
    Button,
    Divider,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    Avatar,
  } from "@chakra-ui/react";

 const SideBar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure(); 
    return (
    <div>  
        <Container maxW="40%" >
              <Text
                color="white"
                fontWeight="semibold"
                fontSize="3xl"
                cursor="pointer"
                onClick={onOpen}
              >
                <HamburgerIcon/>

              </Text>

                <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}>
                <DrawerOverlay />

                <DrawerContent>
                  <DrawerCloseButton color='white' />
                  <DrawerHeader bgColor="#008ecc">

                    <Stack direction='row' my='1'>
                      <Avatar src='https://bit.ly/broken-link' bg='#008ecc.500' borderColor='gray.200' size='sm'/>
                       <Text color="white">Hello, Sign in</Text>
                    </Stack>
                
                  <Stack direction='row' spacing={2} align='center'>
                  <Button bgColor="#008ecc" color="white" size='md' width='9rem' borderRadius='1px' variant='outline'>Account</Button>
                  <Button bgColor="#008ecc" color="white" size='md' width='9rem' borderRadius='1px' variant='outline'> Orders </Button>
                  </Stack>
                  <Divider borderColor="gray.600" />
                  </DrawerHeader>

                  <DrawerBody>
                    <Text lineHeight='2.8rem' fontSize="md"  fontWeight="black.300">Home</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">Shop by Category</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">My List</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">JioMart Wallet</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">JioMart Gift Store</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">JioMart Gift Card</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">GoGreen with JioMart</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">All Offers</Text>
                  
                    <Divider  borderColor="gray.600" />

                    <Text lineHeight='2.8rem' fontSize="md"  fontWeight="black.300">My Account</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">Need Help</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">About us</Text>
                    <Text lineHeight='2.8rem' fontSize="md" fontWeight="black.300">Guide</Text>
                    
                    <Divider  borderColor="gray.600" />

                    <Text lineHeight='2.8rem' fontSize="lg" color='black' fontWeight="600">CONTACT US</Text>

                    <Stack direction='row' lineHeight='2.8rem'>
                    <Text fontSize="sm"  fontWeight="black.300">WhatsApp us :</Text>
                    <Text fontSize="sm" color='#008ecc' as='u' fontWeight="#008ecc.300">70003 70003</Text>
                    </Stack>

                    <Stack direction='row'>
                    <Text fontSize="sm"  fontWeight="black.300">Call us :</Text>
                    <Text fontSize="sm" color='#008ecc' as='u' fontWeight="#008ecc.300">1800 890 1222</Text>
                    </Stack>
                    <Text fontSize="sm" marginBottom='3' fontWeight="black.300">8:00 AM to 8:00 PM, 365 days</Text>
                     
                    <Text fontSize="sm" 
                     fontWeight="black.300">Please note that you are accessing the</Text>
                    <Stack direction='row' marginBottom='3'>
                    <Text fontSize="md"  fontWeight="black.300">  BETA version of </Text>
                    <Text fontSize="md"  color='#008ecc' as='u' fontWeight="#008ecc.300">www.jiomart.com</Text>
                    </Stack>
           
                    <Text fontSize="sm" fontWeight="black.300">
                        Should you encounter any bugs, glitches, 
                        lack of functionality, delayed deliveries, billing
                       errors or other problems on the beta website, please email us on</Text>
                    <Text fontSize="md"  color='#008ecc' as='u' fontWeight="#008ecc.300">cs@jiomart.com</Text>  

                  
                    <Text lineHeight='2.8rem' fontSize="lg" color='black' fontWeight="600">DOWNLOAD APP</Text>

                  <Stack direction='row' marginBottom='10'>
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                                alt="Download Jiomart App for Android from Play Store"/>
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                                alt="Download Jiomart App for iOs from App Store"/>
                 </Stack>             
                  </DrawerBody> 
                </DrawerContent>
              </Drawer>
        </Container>

    </div>
  )
}

export default SideBar