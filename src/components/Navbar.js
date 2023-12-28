import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/ad-type")}>
            Create Ads
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
