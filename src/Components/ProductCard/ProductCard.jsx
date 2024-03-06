/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react"

const ProductCard = ({product,addToCart}) => {
  const handleAddToCart = () => {
    addToCart(product);
  }
  return (
    <Card cursor={'pointer'} backgroundColor={'#fff'}  p={'0.3rem'} m={'0.5rem'} alignItems={'center'} justifyContent={'space-around'} border={'1px solid #C9C9C9'} borderRadius={'0.3rem'} key={product.id}  h={{base:'450px',lg:'500px'}}  minH={{base:'200px',lg:'400px'}} minW={{base:'350px',lg:'320px'}} w={{base:'350px',lg:'320px'}} gap={'10px'} >
    <Flex gap={'1rem'} alignItems={'center'}>
     <Avatar src={product.thumbnail}/>
     <Text variant={'h3'} fontWeight={'bold'}>{product.title}</Text>
    </Flex>
    <Box h={'60px'}>
    <Text variant={'h5'}>{product.description.split(' ').length>10? product.description.split(' ').slice(0,7).join(' ')+'...':product.description}</Text>

    </Box>


   
    <Box h={'200px'} w={'300px'} overflow={'hidden'} objectFit={'contain'} >
     <Image fit={'fill'}  src={product.thumbnail} />
    </Box>
    <Flex gap={'1rem'}>
     <Flex gap={'0.4rem'}>
     <Text>Price:</Text>
     <Text color={'green'} >₹{product.price}</Text>
     </Flex>
     <Text color={'gray'} >{product.discountPercentage + '% discount'}</Text>
    </Flex>
    <br/>

    <Flex alignItems={'center'} justifyContent={'space-between'}>
   
     <Button backgroundColor={'#1A202C'} color={'#fff'} _hover={{backgroundColor:'#3F5A92',color:'#fff'} } onClick={handleAddToCart} >Add to Cart</Button>
    </Flex>
 </Card>
  )
}

export default ProductCard
