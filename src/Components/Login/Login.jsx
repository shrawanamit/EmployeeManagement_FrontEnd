import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Login.scss";
import { Link } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

export class Login extends React.Component {
    constructor(props) 
    {
      super(props);
      this.state={
        EmailId:null,
        Password:null,

        formErrors: {
          EmailId: "",
          Password: ""
        }
      }
    }
    
    render() 
    {
      return (
         
        <form className="logincontainer ">
        <p class="title" align="center">
        <Typography component="h1" variant="h5">
         Login
        </Typography>
        </p>
          <div className="text">
           <TextField 
           name="EmailId" 
           type="email" 
           label="Email Id" 
           variant="outlined" 
           value={this.state.EmailId}
           required/>
            
            </div>

            <div className="text">
            <TextField 
                name="Password" 
                type="password" 
                label="Password"
                variant="outlined" 
                value={this.state.Password} required/>
            </div>
            
            <Grid item xs={12} className="footers">
                <div className="btn">
                    <Button 
                        variant="contained" 
                        color="primary" onClick={this.login} 
                        className="btn">
                        Login
                    </Button>
                </div>
            </Grid>

            <div className="link">
            <Link href="/register"  variant="body2">  {"Don't have an account? Register"}</Link>
            </div>
    </form>
   
        );
    }
}