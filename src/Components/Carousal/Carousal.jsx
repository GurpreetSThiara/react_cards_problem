/* eslint-disable react/prop-types */
import { Box, Skeleton } from "@chakra-ui/react"
import AliceCarousel from "react-alice-carousel"
import ProductCard from "../ProductCard/ProductCard"

const Carousal = ({products, addToCart}) => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1200: { items: 3 },
        1400:{items:4}
    };
    if(!products){
        return <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexWrap={"wrap"} gap={'2rem'} p={'4rem'}>
           { [1,1,1,1,1].map((item,index)=><Box key={index}>
                <Skeleton h={{base:'30px',lg:'250px'}} w={{base:'30px',lg:'200px'}}></Skeleton>
           </Box>)}
        </Box>
    }

  return (
    <Box display={'flex'} overflowX={'auto'} margin={'0.5rem'}>
        
    <AliceCarousel autoPlayInterval={2000} autoPlay   disableDotsControls={{base:true,lg:false}} responsive={responsive} mouseTracking items={  products.map((product)=>{
   return <ProductCard product={product} key={product.id} addToCart={addToCart}/>
  })} />

 
</Box>
  )
}

export default Carousal
