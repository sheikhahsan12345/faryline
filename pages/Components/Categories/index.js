import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pic1 from "../../../public/pic6.png";
import Pic2 from "../../../public/pic7.png";
import Pic3 from "../../../public/pic8.png";
import Pic4 from "../../../public/pic9.png";
import Pic5 from "../../../public/pic10.png";
import Pic6 from "../../../public/pic11.png";
import Image from "next/image";

const Categories = () => {
  const CategoriesList = [
    {
      img: Pic1,
      heading: "APPAREL",
      img2: Pic2,
      heading1: "TABLE LINENS",
    },
    {
      img: Pic3,
      heading: "HOME GOODS",
      img2: Pic4,
      heading1: "FAVORITE PAIRINGS",
    },
    {
      img: Pic5,
      heading: "OUR BAGS",
      img2: Pic6,
      heading1: "PILLOWS",
    },
  ];
  return (
    <>
      <Box className="home4">
        <Container>
          <Box>
            <Grid container className="mt-5">
              {CategoriesList.map((value, index) => {
                return (
                  <Grid item md={4} key={index}>
                    {index % 3 === 1 && (
                      <Box className="text-center mt-3 home7">
                        <h6>EXPLORE OUR CATEGORIES</h6>
                        <h2>EXPLORE FARYLINA UNIVERSE</h2>
                      </Box>
                    )}
                    <Box className="home5">
                      <Image src={value.img} className="img-fluid" alt="img" />
                      <p>{value.heading}</p>
                    </Box>
                    {index === 0 && (
                      <Box className=" home6 float-right">
                        <Image src={value.img2} className="img-fluid" alt="img" />
                        <p>{value.heading1}</p>
                      </Box>
                    )}
                    {index === 1 && (
                      <Box className="home6 home9">
                        <Image src={value.img2} className="img-fluid" alt="img" />
                        <p>{value.heading1}</p>
                      </Box>
                    )}
                    
                    {index === 2 && (
                      <Box className="home6 float-left">
                        <Image src={value.img2} className="img-fluid" alt="img" />
                        <p>{value.heading1}</p>
                      </Box>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Categories;
