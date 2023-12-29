import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import "./Doughnut.css";

const TableAds = () => {
  const [sortValue, setSortValue] = useState("");

  const handleChange = (e) => {
    setSortValue(e.target.value);
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("dat 5", 237, 9.0, 37, 4.3),
    createData("data1", 237, 9.0, 37, 4.3),
    createData("data 2", 237, 9.0, 37, 4.3),
    createData("data 3", 237, 9.0, 37, 4.3),
  ];
  return (
    <Box>
      <FormControl size="small">
        <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sortValue}
          label="Sort"
          style={{
            padding: "-10px",
            width: "100px",
          }}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={"Hight to Low"}>High to Low</MenuItem>
          <MenuItem value={"Low to High"}>Low to High</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} className=" table-container">
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableAds;
