import React from "react";
import { useState, useEffect } from "react";
import AddLabel from "./addLabel";
import CallerTable from "./callerTable";
import CallerDrop from "./calldropdown";

function Fiftycall() {
  const [filter, setFilter] = useState([]);
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);
  const [callers, setCallers] = useState([]);
  const [callid, setCallid] = useState([]);
  const [finFilter, setFinFilter] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);

  useEffect(() => {
    fetch("https://damp-garden-93707.herokuapp.com/getlistoflabels", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: "24b456",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.unique_label_list);
        setFilter(data.data.unique_label_list);
      });
  }, []);

  useEffect(() => {
    fetch("https://damp-garden-93707.herokuapp.com/getcalllist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: "24b456",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.call_data[0].label_id);
        console.log(
          data.data.call_data[0].call_id,
          data.data.call_data[data.data.call_data.length - 1].call_id
        );
        setMin(data.data.call_data[0].call_id);
        setMax(data.data.call_data[data.data.call_data.length - 1].call_id);
        setCallers(data.data.call_data);
        // setFinFilter(data.data.call_data[callid].label_id);
      });
  }, []);

  return (
    <div>
      <CallerDrop min={min} max={max} callid={callid} setCallid={setCallid} />
      <AddLabel filter={filter} setSelectedFilter={setSelectedFilter} />
      <br />
      {/* <CallerTable callers={finFilter} /> */}
    </div>
  );
}

export default Fiftycall;
