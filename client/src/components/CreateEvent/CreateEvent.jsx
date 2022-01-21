import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Autocomplete from "@mui/material/Autocomplete";
import { setDate } from "date-fns";
import { createEvent } from "../../API/API";
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
  const [type, setType] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [description, setDescription] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(true);
  const [vaccinationRequired, setVaccinationRequired] = useState(true);

  function handleCreateEvent(e) {
    createEvent(
      size,
      address,
      type,
      timeStamp,
      description,
      petsAllowed,
      vaccinationRequired,
      { lng: 49.304405, lat: 123.144231 }
    );
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
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <Autocomplete
          onInputChange={(e, value) => setType(value)}
          options={eventType}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Pick a Date"
            value={timeStamp}
            onChange={(newValue) => {
              setTimeStamp(newValue);
            }}
          />
        </LocalizationProvider>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormGroup>
          <FormControlLabel
            checked={petsAllowed}
            onChange={() => {
              setPetsAllowed(!petsAllowed);
            }}
            control={<Switch defaultChecked />}
            label="Pet Friendly"
          />
          <FormControlLabel
            checked={vaccinationRequired}
            onChange={() => {
              setVaccinationRequired(!vaccinationRequired);
            }}
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
