import { useEffect, useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { Box,Skeleton, } from "@chakra-ui/react";
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousal from "../../Components/Carousal/Carousal";
import Navbar from "../../Components/Navbar/Navbar";


const HomePage = () => {
   
    const {fetchProducts ,products} = useGetProducts();
    const [cartItems, setcartItems] = useState([]);

    const addToCart = (product)=>{
        setcartItems([...cartItems,product]);
    }

    useEffect(()=>{
      fetchProducts();
    },[])


  return (
  <>
    <Navbar cart={cartItems}/>
    <Carousal products={products} addToCart={addToCart} />
  </>
  )
}

export default HomePage
