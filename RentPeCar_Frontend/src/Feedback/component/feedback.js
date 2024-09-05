
import { url } from "../../Commons/constants";
import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Users = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    
  useEffect(() => {
    GetAllUsers();
  }, []);
  const GetAllUsers = () => {
    axios.get(url + "/contactus/").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setUsers(result.data);
        console.log(result);
      } else {
        alert("Error while loading data");
      }
    });
  };
  return (
    <div class="container ">
      
      <div class="page-heading">
        <h1 class="title">Feedback</h1>
      </div>
      
     
      <h4> Messages List :</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Message</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((db) => (
              <StyledTableRow key={db.id}>
                <StyledTableCell align="center">{db.fname}</StyledTableCell>
                <StyledTableCell align="center">{db.lname}</StyledTableCell>
                <StyledTableCell align="center">{db.email}</StyledTableCell>
                <StyledTableCell align="center">{db.message}</StyledTableCell>
               </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Users;
