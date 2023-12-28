import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateTextAd = () => {
  return (
    <Box sx={{ padding: "30px" }}>
      <Card>
        <CardContent>
          <Typography sx={{ mb: 2, fontWeight: 600 }}>
            Create Text & Media
          </Typography>
          <Grid container spacing={2} sx={{ padding: "10px" }}>
            <Grid container item spacing={2} xs={12} md={6}>
              <Grid item xs={12}>
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
              </Grid>

              <Grid item xs={12} md={12}>
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
              </Grid>
            </Grid>

            <Grid container item spacing={2} xs={12} md={6}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  Description 01
                </Typography>
                <TextField
                  id="outlined-multiline"
                  multiline
                  rows={4} // Adjust the number of rows based on your design
                  variant="outlined"
                  placeholder="Add a primary text that would make user understand about your product"
                  fullWidth
                  InputProps={{
                    sx: {
                      height: "100%",
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Business Name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add your business name"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Button Label
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Select a label that best suits your ad"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Website URL
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add the URL of the landing page you want to redirect user to"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid container sx={{ justifyContent: "end", mt: 2 }}>
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateTextAd;
