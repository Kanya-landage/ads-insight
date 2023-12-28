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
import React from "react";
import mobile from "../../mobile.png";
import Checkbox from "@mui/material/Checkbox";

const AdType = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Card
        sx={{
          p: "30px",
          position: "relative",
        }}
      >
        <Typography sx={{ position: "absolute", top: 20, left: 20 }}>
          Create Ad
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={12} lg={3}>
            <Card
              sx={{
                padding: "5px",
                width: "300px",
                zIndex: 30,
                height: "27rem",
                border: "2px solid #eaeded",
                position: "relative",
              }}
            >
              <CardActionArea>
                <Checkbox />
                <CardMedia
                  component="img"
                  height="380px"
                  image={mobile}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    objectFit: "contain",
                  }}
                  alt="Text Ad"
                />
              </CardActionArea>
              <CardContent
                sx={{
                  position: "absolute",
                  left: 2,
                  right: 2,
                  width: "99%",
                  boxSizing: "border-box",
                  bottom: 2,
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#eaeded",
                }}
              >
                <Typography sx={{ color: "" }}>Create</Typography>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
                  Text Ad
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <Card
              sx={{
                padding: "5px",
                width: "300px",
                zIndex: 30,
                height: "27rem",
                border: "2px solid #eaeded",
                position: "relative",
              }}
            >
              <CardActionArea>
                <Checkbox />
                <CardMedia
                  component="img"
                  height="380px"
                  image={mobile}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    objectFit: "contain",
                  }}
                  alt="Text Ad"
                />
              </CardActionArea>
              <CardContent
                sx={{
                  position: "absolute",
                  left: 2,
                  right: 2,
                  width: "99%",
                  boxSizing: "border-box",
                  bottom: 2,
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#eaeded",
                }}
              >
                <Typography sx={{ color: "" }}>Create</Typography>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
                  Media Ad
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Button
            variant="contained"
            sx={{ px: 4, position: "absolute", bottom: 20, right: 20, mt: 5 }}
          >
            Next
          </Button>
        </Grid>
      </Card>
    </Box>
  );
};

export default AdType;
