/* eslint-disable react/prop-types */
import { Box, Flex, Input, Text } from "@chakra-ui/react"

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ({cart}) => {
  return (
    <Box w={'100vw'} h={'4rem'} backgroundColor={'#E5E5E5'} padding={'10px'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} >
        
     <Text variant={'h2'} fontWeight={'bold'} fontSize={'1.5rem'}> SHOP NAME</Text>
     <Flex gap={'0.2rem'} alignItems={'center'} >

     <Input  w={'15vw'} display={{base:'none',md:'block'}} backgroundColor={'#AEAEAE'} borderRadius={'20px'}></Input>
     <Box cursor={'pointer'}>
     <IoMdSearch size={24}/>

     </Box>
     <Box cursor={'pointer'} border={'1px solid gray'} px={'1rem'} py={'0.5rem'} borderRadius={'5px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <FaCartShopping size={24}/>
        <Text>{cart.length}</Text>
     </Box>
     </Flex>
    </Box>
  )
}

export default Navbar
