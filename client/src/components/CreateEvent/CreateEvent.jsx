import React, { useState, useStyles } from "react";
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
import { makeStyles } from "@material-ui/core";
import { ClassNames, ThemeProvider } from "@emotion/react";
import { myTheme } from "../Theme/MyTheme";

const eventType = [
  { label: "Sports" },
  { label: "Social" },
  { label: "Mindfulness" },
  { label: "Art & Culture" },
  { label: "Volunteer" },
];

export default function CreateEvent({
  location,
  onCancelEvent,
  onCreateEvent,
}) {
  const [size, setSize] = useState(1);
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [description, setDescription] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(true);
  const [vaccinationRequired, setVaccinationRequired] = useState(true);

  function handleCreateEvent(e) {
    onCreateEvent(
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
      <Stack spacing={3} className="create-event-container">
        <div className=" create-event__instructions">
          Complete The Event Information
        </div>
        <SizeField onChange={(e, value) => setSize(value)} />
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          id="outlined-basic"
          label="Address"
          variant="outlined"
          required
        />
        <Autocomplete
          onInputChange={(e, value) => setType(value)}
          options={eventType}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Type" variant="outlined" required />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => (
              <TextField {...props} variant="outlined" required />
            )}
            label="Pick a Date"
            value={timeStamp}
            onChange={(newValue) => {
              setTimeStamp(newValue);
            }}
          />
        </LocalizationProvider>
        <TextField
          required
          fullWidth
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
            control={
              <Switch
                style={{
                  color: "#FCCA42",
                }}
                defaultChecked
              />
            }
            label="Pet Friendly"
          />
          <FormControlLabel
            checked={vaccinationRequired}
            onChange={() => {
              setVaccinationRequired(!vaccinationRequired);
            }}
            control={
              <Switch
                defaultChecked
                style={{
                  color: "#FCCA42",
                }}
              />
            }
            label="Must Be Vaccinated"
          />

          <Button
            style={{
              marginTop: 20,
              backgroundColor: "#FCCA42",
            }}
            onClick={handleCreateEvent}
            variant="contained"
            disabled={!location}
          >
            Create
          </Button>
          <Button
            style={{ marginTop: 20, borderColor: "#FCCA42", color: "#FCCA42" }}
            onClick={onCancelEvent}
            variant="outlined"
            disabled={!location}
            // className={classes.btn}
          >
            Cancel
          </Button>
        </FormGroup>
      </Stack>
    </div>
  );
}
