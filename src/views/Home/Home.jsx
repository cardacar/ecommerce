import React from "react";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import SwiperIcons from "../../components/CustomSwiperIcons/SwiperIcons";
import { Box, Typography, Grid } from "@mui/material";
import CardPromotion from "../../components/CardPromotion/CardPromotion";
import CardOnlyProduct from "../../components/CardOnlyProduct/CardOnlyProduct";
import CustomSwiperProducts from "../../components/CustomSwiperProducts/CustomSwiperProducts";
import CardProduct from "../../components/CardProduct/CardProduct";

const Home = () => {
  return (
    <div>
      <Box>
        <CustomSwiper />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: "30px", color: "primary.main" }}>
            ¿Qué estás buscando hoy?
          </Typography>
        </Box>
        <SwiperIcons />
      </Box>
      <Grid container sx={{ pt: 5 }}>
        <Grid container item direction="row" sx={{ flexWrap: "nowrap", pb: 5 }}>
          <Grid item>
            <CardPromotion />
          </Grid>
          <Grid
            item
            container
            xs={6}
            direction="row"
            sx={{ flexWrap: "nowrap" }}
          >
            <Grid item>
              <CardOnlyProduct />
            </Grid>
            <Grid item>
              <CardOnlyProduct />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item direction="row" sx={{ flexWrap: "nowrap" }}>
          <Grid
            item
            container
            xs={6}
            direction="row"
            sx={{ flexWrap: "nowrap" }}
          >
            <Grid item>
              <CardOnlyProduct />
            </Grid>
            <Grid item>
              <CardOnlyProduct />
            </Grid>
          </Grid>
          <Grid item>
            <CardPromotion />
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{ alignItems: "center", justifyContent: "center", mt: 6, mb: 0 }}
        >
          <Typography sx={{ fontSize: "15px" }}>
          Productos más recientes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomSwiperProducts/>
        </Grid>
        <CardProduct/>
      </Grid>
    </div>
  );
};

export default Home;
