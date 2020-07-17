import React from "react";
import "./Register.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";


export class Register extends React.Component {
  render() 
  {
    return (
        
        <form id="form">
            <p class="title" align="center">
                <Typography component="h1" variant="h5">
                 SignUp
                </Typography>
            </p>
        <div className="text">
           <TextField 
           name="FirstName" 
           type="FirstName" 
           label="FirstName" 
           variant="outlined" 
           required/>

           <TextField 
           name="LastName" 
           type="LastName" 
           label="LastName" 
           variant="outlined" 
           required/>
        </div>
        <div className="text1" width="346">
           <TextField 
           name="MobileNo" 
           type="MobileNo" 
           label="MobileNo" 
           variant="outlined" 
           required/>
        </div>
        <div className="text1">
           <TextField 
           name="Email" 
           type="Email" 
           label="Email" 
           variant="outlined" 
           required/>
        </div>
        <div className="text1">
           <TextField 
           name="Password" 
           type="Password" 
           label="Password" 
           variant="outlined" 
           required/>
        </div>
        <div className="text1">
           <TextField 
           name="City" 
           type="City" 
           label="City" 
           variant="outlined" 
           required/>
        </div>
        <div className="text1">
           <TextField 
           name="Department" 
           type="Department" 
           label="Department" 
           variant="outlined" 
           required/>
        </div>
        <div className="text1">
           <TextField 
           name="Salary" 
           type="salary" 
           label="Salary" 
           variant="outlined" 
           required/>
        </div>

        
        <Grid item xs={12} className="footers">
                <div className="btn">
                    <Button 
                        variant="contained" 
                        color="primary" onClick={this.login} 
                        className="btn">
                        SignUp
                    </Button>
                </div>
            </Grid>
        </form>
       
        );
    }
}