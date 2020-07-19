import React from "react";
import "./AddEmployee.scss";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const nameRegex = RegExp(/^[A-Z]{1}[a-z]{2,}$/);
const EmailId = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const MobileNo = RegExp(/^([0-9]{2}[ ])?([1-9]{1}[0-9]{9})$/);


export class AddEmployee extends React.Component {
  
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
            errors.FirstName = nameRegex.test(value) ? "" : "First Name not valid";
            break;
    
          case "LastName":
            errors.LastName = nameRegex.test(value) ? "" : "Last Name not valid";
            break;  
    
          case "MobileNo":
            errors.MobileNo = MobileNo.test(value) ? "" : "Mobile Number not valid";
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
            errors.City = nameRegex.test(value) ? "" : "not valid";
            break; 
    
          case "Department":
            errors.Department = nameRegex.test(value) ? "" : "not valid";
            break;
          case "Salary":
            errors.Department = value.length < 3
                                             ? 'not valid'
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
          <div class="login-box">
          <form class="registercontainer">
          <p class="title" align="center">
              <Typography component="h1" variant="h5">
              Add Employee
              </Typography>
              </p>
               <Grid container spacing={5}>
              <Grid item xs={6}>
              <TextField 
              name="FirstName" 
              label="First Name" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.FirstName} 
              required/>
             <div className="error">{errors.FirstName.length > 0 && (<span className="errorMessage">{errors.FirstName}</span>)}  
              </div>  
              </Grid>
              <Grid item xs={6}>
              <TextField 
              name="LastName" 
              label="Last Name" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.LastName}
               required/> 
              <div className="error">{errors.LastName.length > 0 && (<span className="errorMessage">{errors.LastName}</span>)} 
              </div>           
              </Grid>
  
              <Grid item xs={6}>
              <TextField 
              name="MobileNo" 
              label="MobileNo" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.MobileNO} 
              required/>
                <div className="error">
                    {errors.MobileNo.length > 0 && (<span className="errorMessage">{errors.MobileNo}</span>)} 
                </div>
              </Grid>
  
              <Grid item xs={6}>
              <TextField 
              
              name="EmailId" 
              label="EmailId" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.EmailId}
               required/>
               <div className="error">{errors.EmailId.length > 0 && (<span className="errorMessage">{errors.EmailId}</span>)} 
              </div>  
              </Grid>
  
              <Grid item xs={6}>
              <TextField 
             
              name="Password" 
              label="Password" 
              variant="outlined" 
              type="Password"
               onChange={this.handleChange} 
                value={this.state.Password} 
              required/>
              <div className="error">{errors.Password.length > 0 && (<span className="errorMessage">{errors.Password}</span>)} 
              </div> 
              </Grid>
  
              <Grid item xs={6}>
              <TextField 
              name="City" 
              label="City" 
              variant="outlined"
              onChange={this.handleChange} 
              value={this.state.City} 
              required/>
              <div className="error">{errors.City.length > 0 && (<span className="errorMessage">{errors.City}</span>)} 
              </div>  
              </Grid>
  
              <Grid item xs={6}>
              <TextField 
              
              name="Department" 
              label="Department" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.Department}
               required/>
               <div className="error">{errors.Department.length > 0 && (<span className="errorMessage">{errors.Department}</span>)} 
              </div>       
              </Grid>
  
              <Grid item xs={6}>
              <TextField 
              name="Salary" 
              label="Salary" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.Salary} 
              required/>
              <div className="error">{errors.Salary.length > 0 && (<span className="errorMessage">{errors.Salary}</span>)} 
              </div>       
              </Grid>
  
              <Grid item xs={12} className="footers">
              <div className="btn">
              <Button 
               variant="contained" 
               color="primary" 
               onClick={this.register} 
               className="submit"> Add </Button>
              </div>
               </Grid>
               </Grid>
               {/* <div className="link">
               <Link href="/"  variant="body2"> {" Already have an account? Login"}</Link>
              </div> */}
              </form>
          </div>
      );
    }
  }