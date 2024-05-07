import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerImg from '../../../public/banner.png';
import Image from "next/image";



const Banner =()=>{
  
  const SliderImages=[BannerImg,BannerImg,BannerImg];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return(
        <>
          <Box className="homebanner">
           <Container>
             <Grid item md={12}>
              <Box>
                <Carousel infinite={true} autoPlay={true} arrows={false} dots={true}   autoPlaySpeed={2000} responsive={responsive}>
                  {
                    SliderImages.map((value,index)=>{
                      return(
                      <Box key={index} className="position-relative">
                      <Image src={value} className="img-fluid" alt="Banner_img"  />
                        <Box className="itemoverlay">
                        <h2>Our Spring <br/> Collection</h2>
                        <a href="#">DISCOVER THE COLLECTION</a>
                        </Box>
                      </Box>
                      )
                    })
                  }

                </Carousel>
              </Box>
             </Grid>
           </Container>
          </Box>     
        </>
    )
}



export default Banner;