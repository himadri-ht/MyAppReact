import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, duration) {
  return { name, duration };
}

function AgentTable({ selAgents }) {
  console.log(selAgents);
  if (selAgents.length == 0) {
    return null;
  } else {
    return (
      <div className="table-contain">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Call ID</TableCell>
                <TableCell align="center">Agent Name</TableCell>

                <TableCell align="right">Call Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selAgents.map((row) => (
                <TableRow
                  key={row.call_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.call_id}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.agent_id}
                  </TableCell>
                  <TableCell align="right">{row.call_time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default AgentTable;
