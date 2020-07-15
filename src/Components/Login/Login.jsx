import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Login.scss";
import { Link } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });

  return valid;
};

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
      const { formErrors } = this.state;
      return (
          <div className="body">
                <form class="logincontainer">
                     <p class="title" align="center">
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                    </p>
                    <div className="text">
                        <TextField 
                            className={formErrors.EmailId.length > 0 ? "error" : null}
                            name="EmailId" 
                            type="email" 
                            label="Email Id" 
                            variant="outlined" 
                            value={this.state.EmailId}
                            onChange={this.handleChange} 
                        required/>
                        <div className="error">{formErrors.EmailId.length > 0 && (<span className="errorMessage">{formErrors.EmailId}</span>)} 
                        </div> 
                    </div>

                    <div className="text">
                        <TextField 
                            className={formErrors.Password.length > 0 ? "error" : null}
                            name="Password" 
                            type="password" 
                            label="Password"
                            variant="outlined" 
                            onChange={this.handleChange} 
                        value={this.state.Password} required/>
                        <div className="error">{formErrors.Password.length > 0 && (<span className="errorMessage" >{formErrors.Password}</span>)}
                        </div>
                    </div>
                
                    <Grid item xs={12} className="footers" >
                        <div className="btn">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={this.login} 
                                className="btn">
                                Login
                            </Button>
                        </div>
                    </Grid>
                    <div className="link" >
                        <Link href="/register"  variant="body2">  {"Don't have an account? Register"}</Link>
                    </div>
                </form>
            </div>
        );
    }
}