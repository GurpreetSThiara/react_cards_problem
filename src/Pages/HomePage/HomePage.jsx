import { useEffect } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { Box,Skeleton, } from "@chakra-ui/react";
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousal from "../../Components/Carousal/Carousal";
import Navbar from "../../Components/Navbar/Navbar";


const HomePage = () => {
   
    const {fetchProducts ,products} = useGetProducts();

    useEffect(()=>{
      fetchProducts();
    },[])


  return (
  <>
    <Navbar/>
    <Carousal products={products}/>
  </>
  )
}

export default HomePage
