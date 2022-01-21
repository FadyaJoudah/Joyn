import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Autocomplete from "@mui/material/Autocomplete";
// import { grid } from "@mui/system";

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
const eventType = [
  { label: "Sports" },
  { label: "Social" },
  { label: "Mindfulness" },
  { label: "Art & Culture" },
  { label: "Volunteer" },
];

export default function CreateEvent() {
  const [value, setValue] = useState(null);
  const [size, setSize] = useState(1);
  const [address, setAddress] = useState("");

  function handleCreateEvent(e) {
    console.log(size);
    console.log(size);
  }

  return (
    <div>
      <Stack spacing={3}>
        <Autocomplete
          onInputChange={(e, value) => setSize(value)}
          options={numberOfPeople}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Capacity" />}
        />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <Autocomplete
          options={eventType}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Pick a Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
        <TextField id="outlined-basic" label="Description" variant="outlined" />
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Pet Friendly"
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Must Be Vaccinated"
          />
          <Button onClick={handleCreateEvent} variant="contained">
            Create
          </Button>
        </FormGroup>
      </Stack>
    </div>
  );
}
