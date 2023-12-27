import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  ToggleButton,
  Typography,
} from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import React, { useState } from "react";
import { PieChart, Legend, Pie, Cell } from "recharts";
import "./Doughnut.css";

const Doughnut = () => {
  const data = [
    { name: "40% Male", value: 400, fill: "#0088FE" },
    { name: "35% Female", value: 300, fill: "#00C49F" },
    { name: "25% Unknown", value: 300, fill: "#FFBB28" },
  ];

  const [clicks, setClicks] = useState("");
  const [checked, setChecked] = useState("chart");

  const handleSwitch = () => {
    setChecked((prev) => !prev);
  };
  const handleChange = (event) => {
    setClicks(event.target.value);
  };

  const CustomLegend = (props) => {
    console.log(props);
    return (
      <>
        <div className="custom-legend">
          {props?.payload.map((entry, index) => (
            <div
              key={`legend-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <svg
                class="recharts-surface"
                width="50"
                height="20"
                viewBox="0 0 50 20"
              >
                <rect
                  width="50"
                  height="20"
                  rx="5"
                  ry="5"
                  fill={entry.color}
                ></rect>
              </svg>
              <span
                style={{ color: "#596579", fontWeight: 500, padding: "10px" }}
              >
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

  const HeaderData = () => {
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
          <HelpOutlineOutlinedIcon
            sx={{ color: "#E0E0E0", fontSize: "2rem" }}
          />
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Card>
        <CardHeader
          title={<HeaderData />}
          sx={{ padding: "8px", borderBottom: "1px solid #E0E0E0" }}
        />

        <CardContent>
          <PieChart width={630} height={328} className="chart-container">
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
            ></Pie>
            <Legend content={<CustomLegend />} />
            {/* data key = value property from data array cx = x co ordinate cy = y co ordinate  size of chart = outerRadius - innerRadius  */}
          </PieChart>
          <Box>
            {/* <Switch
              checked={checked}
              onChange={handleSwitch}
              sx={{
                padding: "0px",
                width: "58px",
                borderRadius: "5px",
                backgroundColor: "sky",
              }}
              icon={<TableChartOutlinedIcon />} // Icon when not checked
              checkedIcon={<DonutLargeOutlinedIcon />} // Icon when checked
            /> */}
            <Switch defaultChecked />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Doughnut;
