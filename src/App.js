//importing modules and paths

import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SeachBar";
import CallDuration from "./Components/CallDuration";
import AgentTable from "./Components/AgentTable";

function App() {
  //declaring states

  const [data, setData] = useState([]);
  const [selAgents, setSelAgents] = useState([]);
  const [minTime, setMinTime] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [entermin, setEntermin] = useState("0");
  const [entermax, setEntermax] = useState("0");
  const [filAgents, setFilAgents] = useState([]);

  //using useEffect hooks to fetch data from API

  useEffect(() => {
    fetch("https://damp-garden-93707.herokuapp.com/getlistofagents") //to fetch list of agents
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data.listofagents);
      });
  }, []);

  useEffect(() => {
    fetch("https://damp-garden-93707.herokuapp.com/getdurationrange") //to get duration range
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMinTime(data.data.minimum);
        setMaxTime(data.data.maximum);
      });
  }, []);

  useEffect(() => {
    fetch("https://damp-garden-93707.herokuapp.com/getfilteredcalls", {
      //to get agent list after filteration
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: {
          filter_agent_list: selAgents,
          filter_time_range: [parseFloat(entermin), parseFloat(entermax)],
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilAgents(data.data);
      });
  }, [selAgents, entermin, entermax]);

  return (
    <div className="App">
      <SearchBar
        selectedAgents={data}
        selAgents={selAgents}
        setSelAgents={setSelAgents}
      />
      <CallDuration
        selectedAgents={data}
        selAgents={selAgents}
        setSelAgents={setSelAgents}
        entermin={entermin}
        entermax={entermax}
        setEntermin={setEntermin}
        setEntermax={setEntermax}
        minTime={minTime}
        maxTime={maxTime}
      />
      <AgentTable selAgents={filAgents} />
    </div>
  );
}

export default App;
