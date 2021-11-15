import React from "react";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function addLable({ filter, setSelectedFilter }) {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <h1>Add label</h1>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={filter}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        filterSelectedOptions
        onChange={(event, value) => setSelectedFilter(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
  );
}

export default addLable;
