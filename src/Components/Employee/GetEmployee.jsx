import React from 'react';
import Table from '@material-ui/core/Table';  
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';  
import TableRow from '@material-ui/core/TableRow'; 
import TableHead from '@material-ui/core/TableHead';  
import TableContainer from '@material-ui/core/TableContainer';  
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";
import "./GetEmployee.scss";

export class GetEmployee extends React.Component {
    constructor(props) {
      super(props);
     
    }
render() 
    {
      return (
        <TableContainer component={Paper}> 
        <div className="employeebtn">
        <Link to="/">
        <Button variant="contained" color="primary"> Add Employee </Button>
        </Link>
        </div>
        <p class="title" align="center">
        <Typography component="h1" variant="h5"> <b>Employee Details</b> </Typography>
        </p>
          <Table stickyHeader aria-label="sticky table" id='Employee'>  
            <TableHead>  
              <TableRow>  
                <TableCell>ID</TableCell>  
                <TableCell align="right" >First Name</TableCell>  
                <TableCell align="right" >Last Name</TableCell>  
                <TableCell align="right" >MobileNo</TableCell>  
                <TableCell align="right" >Email Id</TableCell>  
                <TableCell align="right" >City</TableCell>  
                <TableCell align="right" >Department</TableCell>  
                <TableCell align="right" >Salary</TableCell>
                <TableCell align="right" >Update</TableCell> 
                <TableCell align="right" >Delete</TableCell>
                
              </TableRow>  
            </TableHead>  
  
          </Table>  
        </TableContainer>  
      );
    }
}