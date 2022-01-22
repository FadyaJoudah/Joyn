import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import React from "react";
const numberOfPeople = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
];
export default function SizeField({ onChange }) {
  return (
    <div>
      <Autocomplete
        onInputChange={onChange}
        options={numberOfPeople}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Capacity" variant="standard" />
        )}
      />
    </div>
  );
}
