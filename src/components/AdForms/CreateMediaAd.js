import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./AdType.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import SubmitModal from "../SubmitModal";

const CreateMediaAd = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ p: 5 }}>
      <Card className="create-ad-card">
        <CardContent>
          <Typography sx={{ mb: 1, fontWeight: 600 }}>
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
                  Heading 02
                </Typography>
                <TextField
                  id="outlined-multiline"
                  multiline
                  rows={4}
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

            <Grid item xs={12} md={12} lg={4}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Landscape Marketing Image(1.9:1)
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add the URL of the image you want to use for Ad"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Portrait Marketing Image(4:5)
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add the URL of the image you want to use for Ad"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Square Marketing Image(1:1)
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add the URL of the image you want to use for Ad"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Video URL
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add the URL of the video you want to use for Ad"
                size="small"
                fullWidth
              />
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

export default CreateMediaAd;
