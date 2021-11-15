import "../App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CallDuration({
  selectedAgents,
  selAgents,
  setSelAgents,
  setEntermin,
  setEntermax,
  entermin,
  entermax,
  minTime,
  maxTime,
}) {
  function updateMin(e) {
    setEntermin(e.target.value);
  }
  function updateMax(e) {
    setEntermax(e.target.value);
  }
  return (
    <div className="range">
      <Box
        component="form"
        // sx={{
        //   "& > :not(style)": { m: 1, width: "50ch" },
        // }}
        noValidate
        autoComplete="off"
      >
        <h3 className="range-heading">
          Choose a call range from {minTime} to {maxTime}
        </h3>
        <div className="minimum">
          <TextField
            id="outlined-basic"
            label="Minimum"
            variant="outlined"
            input
            type="number"
            min={minTime}
            max={maxTime}
            value={entermin}
            onChange={updateMin}
          />
        </div>
        <div className="maximum">
          <TextField
            id="outlined-basic"
            label="Maximum"
            variant="outlined"
            input
            type="number"
            min={minTime}
            max={maxTime}
            value={entermax}
            onChange={updateMax}
          />
        </div>
      </Box>
    </div>
  );
}

export default CallDuration;
