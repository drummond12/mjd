import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import MJD from "../assets/mjd.png";

const pages = [
  { label: "Content 1", path: "/page1" },
  { label: "Content 2", path: "/page2" },
  { label: "Content 3", path: "/page3" },
];

const buttonStyles = {
  color: "#727272",
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "Helvetica",
  marginRight: "10px",
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  "&:hover": {
    bgcolor: "#f7f7f7",
    borderRadius: "20px",
    color: "#7733ff",
  },
};

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none", padding: "10px 0"}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={MJD} className="MJD"></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
