import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const pages = [
    {label: "JSON format", path: "/json-formatter"},
    {label: "placeholder", path: "/tools"},
    {label: "placeholder", path: "/tools"}];

const buttonStyles = {
    color: "#727272",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginRight: "10px",
    marginTop: "15px",
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
            sx={{
                borderTop: "3px solid #7733ff",
                backgroundColor: "transparent", // No background color
                boxShadow: "none",

            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            justifyContent: "flex-start",
                        }}
                    >
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
