import * as React from "react";
import Tools from "./Tools";
import { Button, Container } from "@mui/material";

export default function JsonFormatter() {
  const [jsonInput, setJsonInput] = React.useState("");
  const [jsonOutput, setJsonOutput] = React.useState("");
  const [error, setError] = React.useState("");

  const buttonStyles = {
    color: "#727272",
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginRight: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    marginTop: "10px",
    "&:hover": {
      bgcolor: "#f7f7f7",
      borderRadius: "20px",
      color: "#7733ff",
    },
  };

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setJsonOutput(err);
    }
  };

  const clearJson = () => {
    setJsonInput("");
    setJsonOutput("");
    setError("");
  };

  const copyJson = async () => {
    await navigator.clipboard.writeText(jsonOutput);
  };

  return (
      <div className="json-formatter">
        <Tools/>

        <div className="json-formatter-error">
          {error}
        </div>

        <Container className="json-formatter-container">

        <textarea
            className="json-input-container"
            placeholder="ENTER JSON"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
        ></textarea>
          <div className="json-formatter-controls">
            <Button sx={buttonStyles} className="json-input-button" onClick={formatJson}>
              Format
            </Button>
            <Button sx={buttonStyles} className="json-clear-button" onClick={clearJson}>
              Clear
            </Button>
            <Button sx={buttonStyles} className="json-copy-button" onClick={copyJson}>
              Copy
            </Button>
          </div>
          <textarea
              className="json-output-container"
              placeholder="OUTPUT JSON....."
              value={jsonOutput}
              readOnly={true}
          ></textarea>
        </Container>
      </div>
  );
}
