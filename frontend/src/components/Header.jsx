// eslint-disable-next-line no-unused-vars
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MJD from "../assets/MJD.png";

const pages = [
  { label: "Placeholder 1", path: "/page1" },
  { label: "Placeholder 2", path: "/page2" },
  { label: "Tools", path: "/tools" },
];

const buttonStyles = {
  color: "#727272",
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "Helvetica",
  marginX: 1,
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  padding: "6px 16px",
  textTransform: "none",
  "&:hover": {
    bgcolor: "#f7f7f7",
    color: "#7733ff",
  },
};

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        paddingY: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={MJD} alt="MJD Logo" style={{ height: 70 }} />
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                sx={buttonStyles}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
