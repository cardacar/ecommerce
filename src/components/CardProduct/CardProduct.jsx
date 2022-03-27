import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ImgPrueba from '../../assets/images/resultado1@2x.png'

const CardProduct = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        width: "13rem",
        height: "24.125rem", 
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "60%",
          backgroundImage: `url(${ImgPrueba})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "40%",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ mt: 2 }}>
            <Typography sx={{ fontSize: "12px" }}>
              iPhone 11 64GB Negro
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: "10px", color: "primary.main" }}>
              Apple
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="row"
            sx={{ justifyContent: "space-evenly", fontSize: "15px" }}
          >
            <Grid item>
              <Typography
                sx={{ fontSize: "12px", textDecoration: "line-through" }}
              >
                $2’300.000
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: "12px", color: "primary.main" }}>
                $2’300.000
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: 10,
                "&:hover": {
                  backgroundColor: "#9f69f0",
                },
                textTransform: "none",
                fontSize: "13px",
                p: "3px 20px 3px 20px",
                m: 3
              }}
            >
              Agregar al carrito
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CardProduct;
