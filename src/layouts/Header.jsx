import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  InputBase,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import { AccountCircle, ShoppingCart, Search, ArrowDropDown, FilterAlt } from "@mui/icons-material";
import CustomButtom from "../components/CustomButton/CustomButtom";

const Header = ({children}) => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 0 }} elevation={0}>
      <AppBar
        sx={{ backgroundColor: "white", boxShadow: 0, position: "relative" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component={"div"}
            sx={{ flexGrow: 1, display: "flex", color: "black", mt: 0 }}
          >
            Logo
          </Typography>
          <Box sx={{ width: 300, display: "flex" }}>
            <CustomButtom
              variant="text"
              customstyles={{
                fontSize: "13px",
                minHeight: "37px",
                "&:hover": { backgroundColor: "#9f69f0", color:'white' },
              }}
            >
              Registrate o inicia sesión
            </CustomButtom>
            <Box>
              <Badge color="primary" sx={{ ml: 2, mr: 1 }}>
                <AccountCircle color="primary" />
              </Badge>
              <Badge badgeContent={3} color="primary">
                <ShoppingCart color="primary" />
              </Badge>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="relative" sx={{ height: "60px" }}>
        <Toolbar>
          <Paper
            sx={{
              p: "0px 4px",
              m: "5px 10px 5px 40px",
              display: "flex",
              alignItems: "center",
              width: "90%",
              borderRadius: "16px",
              //height: '1000px'
            }}
          >
            <IconButton>
              <Search color="primary" />
            </IconButton>
            <InputBase
              placeholder="Estoy Buscando ..."
              sx={{ ml: 1, mt: "0px", flex: 1 }}
              inputProps={{ "aria-label": "Estoy Buscando ..." }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <CustomButtom
              variant="text"
              customstyles={{
                fontSize: "13px",
                "&& .MuiTouchRipple-child": {
                  backgroundColor: "transparent",
                },
                color: '#a778ee'
              }}
              endIcon={<ArrowDropDown color="action"/>}
            >
              Todas las categorías
            </CustomButtom>
          </Paper>
          <Box sx={{ display: "flex", pr: "30px", mr: "10px" }}>
            <CustomButtom
              variant="outlined"
              customstyles={{
                fontSize: "13px",
                "&:hover": { backgroundColor: "#9f69f0" },
                color: "white",
                borderColor: "white",
                pl: 4,
                pr: 4,
                mr: 1
              }}
            >
              Buscar
            </CustomButtom>
            <CustomButtom
              variant="outlined"
              customstyles={{
                fontSize: "13px",
                "&:hover": { backgroundColor: "#9f69f0" },
                color: "white",
                borderColor: "white",
                pl: 4,
                pr: 4,
              }}
              startIcon={<FilterAlt/>}
            >
              Filtros
            </CustomButtom>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Header;
