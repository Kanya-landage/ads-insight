import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mobile from "../../mobile.png";
import Checkbox from "@mui/material/Checkbox";
import "./AdType.css";

const AdType = () => {
  const navigate = useNavigate();
  const [adType, setAdType] = useState("");
  return (
    <Box sx={{ p: 5 }}>
      <Card className="create-ad-card">
        <CardContent sx={{ height: "100%" }}>
          <Typography className="create-ad-title">Create Ad</Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 3, mb: 3 }}
          >
            <Grid item xs={12} md={12} lg={3}>
              <Card className="text-ad-card">
                <CardActionArea>
                  <Checkbox onChange={() => setAdType("text")} />
                  <CardMedia
                    component="img"
                    height="350px"
                    image={mobile}
                    sx={{
                      objectFit: "contain",
                    }}
                    alt="Text Ad"
                  />
                </CardActionArea>
                <CardContent className="ad-card-content">
                  <Typography sx={{ color: "" }}>Create</Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ fontWeight: 600 }}
                  >
                    Text Ad
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={12} lg={3}>
              <Card className="text-ad-card">
                <CardActionArea>
                  <Checkbox onChange={() => setAdType("media")} />
                  <CardMedia
                    component="img"
                    height="350px"
                    image={mobile}
                    sx={{
                      objectFit: "contain",
                    }}
                    alt="Text Ad"
                  />
                </CardActionArea>
                <CardContent className="ad-card-content">
                  <Typography sx={{ color: "" }}>Create</Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ fontWeight: 600 }}
                  >
                    Media Ad
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Button
              variant="contained"
              sx={{ px: 4, position: "absolute", bottom: 10, right: 20, mt: 5 }}
              onClick={() => {
                adType === "text" && navigate("/text-ad");
                adType === "media" && navigate("/media-ad");
              }}
            >
              Next
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdType;
