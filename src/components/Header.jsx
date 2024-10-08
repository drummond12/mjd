import * as React from "react";
import Button from "@mui/material/Button";
import MJD from "../assets/mjd.png";
import MenuIcon from '@mui/icons-material/Menu'; // Burger menu icon


export default function Header({ onHomeClick, onTest1Click, onTest2Click, onTest3Click }) {
  const buttonStyles = {
    color: "#727272",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginRight: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "20px",
    "&:hover": {
      bgcolor: "#d2cfcf",
      borderRadius: "20px",
      color: "#7733ff",
    },
  };

  return (
    <header className="header">
      <Button onClick={onHomeClick}>
        <img src={MJD} className="MJD"></img>
      </Button>
      <Button sx={buttonStyles} variant="text" onClick={onTest1Click}>
        test1
      </Button>
      <Button sx={buttonStyles} variant="text" onClick={onTest2Click}>
        test2
      </Button>
      <Button sx={buttonStyles} variant="text" onClick={onTest3Click}>
        test3
      </Button>
    </header>
  );
}
