import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import "./CreateAdForm.css";

const CreateAdForm = () => {
  return (
    <Box sx={{ padding: "30px" }}>
      <Card>
        <CardContent>
          <Typography>Create Text & Media</Typography>
          <form>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 6">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 01
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Add a heading that would make user interested"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6" gridRow="span 2">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Description 01
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Add a primary text that would make user understand about your product"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 02
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder="Add a heading that would make user interested"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 4">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Landscape Marketing Image (1.9:1)
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder="Add the URL of the image you want to use for Ad"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 4">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 05
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 4">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 06
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 12">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 07
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 08
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 09
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 12">
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Heading 10
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "5px",
                }}
                gridColumn="span 12"
              >
                <Button
                  variant="contained"
                  sx={{
                    mr: 3,
                    backgroundColor: "#eaeded",
                    px: 4,
                    color: "black",
                  }}
                >
                  Back
                </Button>
                <Button variant="contained" sx={{ px: 4 }}>
                  Next
                </Button>
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateAdForm;
