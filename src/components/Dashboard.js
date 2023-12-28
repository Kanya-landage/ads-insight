import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TableAds from "./TableAds";
import Doughnut from "./Doughnut";
import styled from "@emotion/styled";

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  "#000000"
)}" d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg>`;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 75,
  height: 45,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    margin: 6,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(30px)",
      // "& .MuiSwitch-thumb:before": {
      //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      //     "#fff"
      //   )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      // },
      "& + .MuiSwitch-track": {
        opacity: 1,
        // backgroundColor: theme?.palette.mode === "dark" ? "#40C4FF" : "#40C4FF",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    // backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001E3C",
    width: 35,
    height: 35,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url("data:image/svg+xml;utf8,${svgString}")`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    // backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#AAB4BE",
    borderRadius: "30px",
  },
}));

const Dashboard = () => {
  const [toggle, setToggle] = React.useState(true);
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
        <Grid item xs={12} md={3}>
          <TableAds />
        </Grid>
        <Grid item xs={12} md={3}>
          <Doughnut />
        </Grid>
        <Grid item md={3}>
          <MaterialUISwitch sx={{ m: 1 }} onClick={() => setToggle(!toggle)} />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
