import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdType.css";
import SubmitModal from "../SubmitModal";

const CreateTextAd = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 5 }}>
      <Card className="create-ad-card">
        <CardContent sx={{ height: "100%" }}>
          <Typography sx={{ mb: 2, fontWeight: 600 }}>
            Create Text & Media
          </Typography>

          <Grid container spacing={2}>
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

            <Grid
              container
              sx={{
                justifyContent: "end",
                mt: 2,
                position: "absolute",
                bottom: 20,
                right: 20,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mr: 3,
                  backgroundColor: "#eaeded",
                  px: 4,
                  color: "black",
                }}
                onClick={() => navigate("/ad-type")}
              >
                Back
              </Button>
              <Button
                variant="contained"
                sx={{ px: 4 }}
                onClick={() => setOpen(true)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <SubmitModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default CreateTextAd;
