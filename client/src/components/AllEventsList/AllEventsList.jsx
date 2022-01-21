import React, { useEffect, useState } from "react";
// import { eventList } from "../../API/API";
import axios from "axios";

export default function AllEventsList() {
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    //TODO: why the import of this function doesn't work
    // eventList();
    axios.get("http://localhost:8080/events/all").then((res) => {
      setEventList(res.data);
    });
  }, []);
  return (
    //mapping the event list and rendering the (all or some) of the ifo depending on the existing of token (logged in or not)
    <div>
      {eventList.map((eve) => {
        if (localStorage.getItem("token")) {
          return <div key={eve.id}>{eve.description}</div>;
        } else {
          return <div key={eve.id}>{eve.type}</div>;
        }
      })}
    </div>
  );
}
