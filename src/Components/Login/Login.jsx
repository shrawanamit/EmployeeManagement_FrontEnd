import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Login.scss";
import { Link } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const validEmailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);

export class Login extends React.Component {

    constructor(props) 
    {
      super(props);
      this.state={
        EmailId:null,
        Password:null,

        errors: {
          EmailId: "",
          Password: ""
        }
      }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {

          case 'EmailId': 
            errors.EmailId = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'Password': 
            errors.Password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
      }
    
    render() 
    {
        const { errors } = this.state;
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
                    onChange={this.handleChange} 
                    value={this.state.EmailId} required/>
                <div className="error">
                    {errors.EmailId.length > 0 && (<span className="errorMessage">{errors.EmailId}</span>)} 
                </div>
            
            </div>

            <div className="text">
                <TextField 
                    name="Password" 
                    type="password" 
                    label="Password"
                    variant="outlined" 
                    onChange={this.handleChange} 
                    value={this.state.Password} required/>
                <div className="error">
                    {errors.Password.length > 0 && (<span className="errorMessage">{errors.Password}</span>)} 
                </div>
            </div>
            
            <Grid item xs={12} className="footers">
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

            <div className="link">
            <Link href="/register"  variant="body2">  {"Don't have an account? Register"}</Link>
            </div>
    </form>
   
        );
    }
}