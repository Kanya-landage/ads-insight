import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TableAds from "./TableAds";
import Doughnut from "./Doughnut";
const Dashboard = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Grid item xs={12} md={5}>
          <TableAds />
        </Grid>
        <Grid item xs={12} md={5}>
          <Doughnut />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
