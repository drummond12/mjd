import * as React from "react";
import JFI from "../../assets/JFI.png";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Tools() {
  const cardStyles = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    width: "300px", // Fixed width
    height: "300px", // Fixed height
    padding: "15px", // Padding around content
    margin: "20px", // Margin around the card
    transition: "0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      bgcolor: "#f7f7f7",
      borderRadius: "20px",
      color: "#7733ff",
      transform: "scale(1.02)", // Slight scale effect on hover
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap", // Ensures cards don't stretch too much
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        paddingTop: 7,
        paddingX: 2,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8}>
          <Link to="/json-formatter" style={{ textDecoration: "none" }}>
            <Card sx={cardStyles}>
              <CardMedia sx={{ height: 200 }} image={JFI} alt="Card Image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Format
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid>
          <Link to="/json-formatter" style={{ textDecoration: "none" }}>
            <Card sx={cardStyles}>
              <CardMedia sx={{ height: 200 }} image={JFI} alt="Card Image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Format
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid>
          <Link to="/json-formatter" style={{ textDecoration: "none" }}>
            <Card sx={cardStyles}>
              <CardMedia sx={{ height: 200 }} image={JFI} alt="Card Image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Format
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid>
          <Link to="/json-formatter" style={{ textDecoration: "none" }}>
            <Card sx={cardStyles}>
              <CardMedia sx={{ height: 200 }} image={JFI} alt="Card Image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Format
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
