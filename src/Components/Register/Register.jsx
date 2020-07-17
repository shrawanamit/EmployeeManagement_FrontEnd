import React from "react";
import "./Register.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const nameRegex = RegExp(/^[A-Z]{1}[a-z]{2,}$/);
const EmailId = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const MobileNo = RegExp(/^([0-9]{2}[ ])?([1-9]{1}[0-9]{9})$/);


export class Register extends React.Component {

    
  constructor(props) {
    super(props);
    
    this.state={
      FirstName:null,
      LastName:null,
      MobileNo:null,
      EmailId:null,
      Password:null,
      City:null,
      Department:null,
      Salary:null,
     
      errors: {
        FirstName:'',
        LastName:'',
        MobileNo:'',
        EmailId:'',
        Password:'',
        City:'',
        Department:'',
        Salary:'',
      }
    };
  }
  
   handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    
    switch (name) {

      case "FirstName":
        errors.FirstName = nameRegex.test(value) ? "" : "First Name start with capital latter minimum 3 character";
        break;

      case "LastName":
        errors.LastName = nameRegex.test(value) ? "" : "Last Name start with capital latter minimum 3 character";
        break;  

      case "MobileNo":
        errors.MobileNo = MobileNo.test(value) ? "" : "Mobile Number must have 10 digit";
        break;  

      case "EmailId":
        errors.EmailId = EmailId.test(value) ? "" : "Invalid Email Id";
        break; 
      case 'Password': 
        errors.Password = 
                        value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                        break;

      case "City":
        errors.City = nameRegex.test(value) ? "" : "city start with capital latter minimum 3 character";
        break; 

      case "Department":
        errors.Department = nameRegex.test(value) ? "" : "Department start with capital latter minimum 3 character";
        break;
      case "Salary":
        errors.Department = value.length < 3
                                         ? 'salary must be 3 intiger!'
                                         : '';
        break;

        default:
        break;
    }
        this.setState({ errors, [name]: value }, () => console.log(this.state));
  }

  render() 
  {
    const { errors } = this.state;
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
                value={this.state.FirstName} required/>
                <div className="error">
                    {errors.FirstName.length > 0 && (<span className="errorMessage">{errors.FirstName}</span>)} 
                </div>
          

           <TextField 
                name="LastName" 
                type="LastName" 
                label="LastName" 
                variant="outlined" 
                onChange={this.handleChange} 
                value={this.state.LastName} required/>
                <div className="error">
                    {errors.LastName.length > 0 && (<span className="errorMessage">{errors.LastName}</span>)} 
                </div>
        </div>
        <div className="text1" width="346">
           <TextField 
           name="MobileNo" 
           type="MobileNo" 
           label="MobileNo" 
           variant="outlined" 
           onChange={this.handleChange} 
                    value={this.state.MobileNo} required/>
                <div className="error">
                    {errors.MobileNo.length > 0 && (<span className="errorMessage">{errors.MobileNo}</span>)} 
                </div>
        </div>
        <div className="text1">
           <TextField 
           name="EmailId" 
           type="Email" 
           label="EmailId" 
           variant="outlined" 
           onChange={this.handleChange} 
                    value={this.state.EmailId} required/>
                <div className="error">
                    {errors.EmailId.length > 0 && (<span className="errorMessage">{errors.EmailId}</span>)} 
                </div>
        </div>
        <div className="text1">
           <TextField 
           name="Password" 
           type="Password" 
           label="Password" 
           variant="outlined" 
           onChange={this.handleChange} 
                    value={this.state.Password} required/>
                <div className="error">
                    {errors.Password.length > 0 && (<span className="errorMessage">{errors.Password}</span>)} 
                </div>
        </div>
        <div className="text1">
           <TextField 
                name="City" 
                type="City" 
                label="City" 
                variant="outlined" 
                onChange={this.handleChange} 
                value={this.state.City} required/>
                <div className="error">
                    {errors.City.length > 0 && (<span className="errorMessage">{errors.City}</span>)} 
                </div>
        </div>
        <div className="text1">
           <TextField 
                name="Department" 
                type="Department" 
                label="Department" 
                variant="outlined" 
                onChange={this.handleChange} 
                value={this.state.Department} required/>
                <div className="error">
                    {errors.Department.length > 0 && (<span className="errorMessage">{errors.Department}</span>)} 
                </div>
        </div>
        <div className="text1">
           <TextField 
                name="Salary" 
                type="salary" 
                label="Salary" 
                variant="outlined" 
                onChange={this.handleChange} 
                value={this.state.Salary} required/>
                <div className="error">
                    {errors.Salary.length > 0 && (<span className="errorMessage">{errors.Salary}</span>)} 
                </div>
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