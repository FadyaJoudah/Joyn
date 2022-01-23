import React from "react";
import Card from "@mui/material/Card";

export default function PopUp({
  event: {
    size,
    address,
    type,
    timestamp,
    description,
    petsAllowed,
    vaccinationRequired,
    createdBy,
  },
}) {
  return (
    <div>
      <Card className="card" sx={{ width: 100, height: 100 }}>
        <p>@{createdBy}</p>
        <p>{size}</p>
        <p>{address}</p>
        <p>{type}</p>
        <p>{timestamp}</p>
        <p>{description}</p>
        <p>{petsAllowed}</p>
        <p>{vaccinationRequired}</p>
      </Card>
    </div>
  );
}
