// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import reactDom from "react-dom";
// // import { render } from "react-dom";
// import SearchBar from "./SeachBar";
// import CallDuration from "./CallDuration";
// import AgentTable from "./AgentTable";

// function Agent() {
//   const [data, setData] = useState([]);
//   const [selAgents, setSelAgents] = useState([]);
//   const [entermin, setEntermin] = useState("0");
//   const [entermax, setEntermax] = useState("0");
//   const [filAgents, setFilAgents] = useState([]);

//   // useEffect(() => {
//   //   data();
//   //   }, []);

//   useEffect(() => {
//     fetch("https://damp-garden-93707.herokuapp.com/getlistofagents")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         // console.log(data.data.listofagents);
//         setData(data.data.listofagents);
//       });
//   }, []);

//   useEffect(() => {
//     console.log(selAgents);

//     fetch("https://damp-garden-93707.herokuapp.com/getfilteredcalls", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         info: {
//           filter_agent_list: selAgents,
//           filter_time_range: [parseFloat(entermin), parseFloat(entermax)],
//         },
//       }),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("hi", data);
//         setFilAgents(data.data);
//       });
//   }, [selAgents, entermin, entermax]);

//   return (
//     <div className="App">
//       <SearchBar
//         selectedAgents={data}
//         selAgents={selAgents}
//         setSelAgents={setSelAgents}
//       />
//       <CallDuration
//         selectedAgents={data}
//         selAgents={selAgents}
//         setSelAgents={setSelAgents}
//         entermin={entermin}
//         entermax={entermax}
//         setEntermin={setEntermin}
//         setEntermax={setEntermax}
//       />
//       <AgentTable selAgents={filAgents} />
//     </div>
//   );
// }

// export default Agent;
