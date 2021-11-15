import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function SearchBar({ selectedAgents, selAgents, setSelAgents }) {
  return (
    <div className="search">
      <Stack spacing={3} sx={{ width: 500 }}>
        <h2 className="search-heading">Select Agents</h2>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={selectedAgents}
          getOptionLabel={(option) => option}
          defaultValue={[]}
          filterSelectedOptions
          onChange={(event, value) => setSelAgents(value)}
          renderInput={(params) => (
            <TextField {...params} label="select agents" placeholder="select" />
          )}
        />
      </Stack>
    </div>
  );
}

export default SearchBar;
