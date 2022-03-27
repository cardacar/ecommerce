import React from "react";
import { Button } from "@mui/material";

const CustomButtom = ({ children, ...props }) => {
  const { customstyles } = props;
  return (
    <Button
      sx={{
        borderRadius: "19px",
        padding: "3px 10px 3px 10px",
        fontWeight: 600,
        textTransform: "none",
        ...customstyles,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButtom;
