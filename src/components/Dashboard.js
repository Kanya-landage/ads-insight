import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TableAds from "./TableAds";
import Doughnut from "./Doughnut";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import "./Doughnut.css";

const HeaderData = () => {
  const [clicks, setClicks] = React.useState("");

  const handleChange = () => {};
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        Ads Insight
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "150px",
          alignItems: "center",
        }}
      >
        <FormControl size="small">
          <InputLabel id="demo-simple-select-helper-label">Clicks</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={clicks}
            label="Age"
            style={{
              padding: "-10px",
              width: "100px",
            }}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <HelpOutlineOutlinedIcon sx={{ color: "#E0E0E0", fontSize: "2rem" }} />
      </Box>
    </Box>
  );
};

const Dashboard = () => {
  const [toggle, setToggle] = React.useState("chart");

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 3 }}
      >
        <Grid item xs={12} md={12} lg={6} sx={{ position: "relative" }}>
          <Card className="ad-insight-card">
            <CardHeader
              title={<HeaderData />}
              sx={{ padding: "8px", borderBottom: "1px solid #E0E0E0" }}
            />

            <CardContent>
              {toggle === "chart" && <Doughnut />}
              {toggle === "table" && <TableAds />}
              <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
                <Box
                  sx={{
                    backgroundColor: "#ccd1d1",
                    borderRadius: "36px",
                    width: "85px",
                    display: "flex",
                    justifyContent: "space-around",
                    position: "relative",
                    height: "40px",
                  }}
                >
                  <DonutLargeIcon
                    sx={{
                      fontSize: "30px",
                      borderRadius: "20px",
                      padding: "5px",
                      color: `${toggle === "chart" ? "#fff" : ""}`,
                      backgroundColor: `${toggle === "chart" ? "#1976D2" : ""}`,
                    }}
                    onClick={() =>
                      setToggle(toggle === "chart" ? "table" : "chart")
                    }
                  />

                  <TableChartOutlinedIcon
                    sx={{
                      fontSize: "30px",
                      borderRadius: "20px",
                      padding: "5px",
                      color: `${toggle === "table" ? "#fff" : ""}`,
                      backgroundColor: `${toggle === "table" ? "#1976D2" : ""}`,
                    }}
                    onClick={() =>
                      setToggle(toggle === "chart" ? "table" : "chart")
                    }
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
