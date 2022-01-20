import React, { useEffect, useState } from "react";
// import { eventList } from "../../API/API";
import axios from "axios";

export default function AllEventsList() {
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    // eventList();
    axios.get("http://localhost:8080/events/all").then((res) => {
      setEventList(res.data);
    });
  }, []);
  return (
    <div>
      {eventList.map((evet) => {
        if (localStorage.getItem("token")) {
          return <div key={evet.id}>{evet.type}</div>;
        } else {
          return <div key={evet.id}>{evet.type}</div>;
        }
      })}
    </div>
  );
}
