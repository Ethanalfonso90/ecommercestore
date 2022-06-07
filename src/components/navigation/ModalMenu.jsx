import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(women, men, brand, era, size) {
  return { women, men, brand, era, size };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ModalMenu() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>WOMEN'S SALE</TableCell>
            <TableCell align="right">MEN'S SALE</TableCell>
            <TableCell align="right">SALE BY BRAND</TableCell>
            <TableCell align="right">SALE BY ERA</TableCell>
            <TableCell align="right">SALE BY SIZE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.women}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.women}
              </TableCell>
              <TableCell align="right">{row.men}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.era}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
