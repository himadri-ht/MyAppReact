import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CallData from "./DataCallDuration.json";
import { useState, useEffect } from "react";

function calldropdown({ min, max, callid, setCallid }) {
  function updateCallid(e) {
    setCallid(e.target.value);
    console.log(e.target.value);
  }
  return (
    // <div>
    //
    //   <input type="number" name="call_id" min={min} max={max}></input>
    // </div>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <h3>
        enter caller id between {min} and {max}
      </h3>
      <TextField
        id="outlined-basic"
        label="call_id"
        variant="outlined"
        input
        type="number"
        min={min}
        max={max}
        value={callid}
        onChange={updateCallid}
      />
    </Box>
  );
}

export default calldropdown;
