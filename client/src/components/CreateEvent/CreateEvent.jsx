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
import SizeField from "../SizeField/SizeField";
import "./CreateEvent.scss";
// import { grid } from "@mui/system";

const eventType = [
  { label: "Sports" },
  { label: "Social" },
  { label: "Mindfulness" },
  { label: "Art & Culture" },
  { label: "Volunteer" },
];

export default function CreateEvent({ location }) {
  const [value, setValue] = useState(null);
  const [size, setSize] = useState(1);
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [description, setDescription] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(true);
  const [vaccinationRequired, setVaccinationRequired] = useState(true);

  function handleCreateEvent(e) {
    console.log(size);
    createEvent(
      size,
      address,
      type,
      timeStamp,
      description,
      petsAllowed,
      vaccinationRequired,
      location
    );
  }

  return (
    <div>
      <Stack className="stack" spacing={3}>
        <SizeField onChange={(e, value) => setSize(value)} />
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          id="outlined-basic"
          label="Address"
          variant="standard"
        />
        <div>{JSON.stringify(location)}</div>
        <Autocomplete
          onInputChange={(e, value) => setType(value)}
          options={eventType}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Type" variant="standard" />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} variant="standard" />}
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
          variant="standard"
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
          <Button
            onClick={handleCreateEvent}
            variant="contained"
            disabled={!location}
          >
            Create
          </Button>
        </FormGroup>
      </Stack>
    </div>
  );
}
