import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./UpdateEmployee.scss";

const nameRegex = RegExp(/^[A-Z]{1}[a-z]{2,}$/);
const EmailId = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const MobileNo = RegExp(/^([0-9]{2}[ ])?([1-9]{1}[0-9]{9})$/);

export class UpdateEmployee extends React.Component {

  constructor(props) {
    super(props);
    
    this.state={
      FirstName:null,
      LastName:null,
      MobileNo:null,
      EmailId:null,
      City:null,
      Department:null,
      Salary:null,
     
      errors: {
        FirstName:'',
        LastName:'',
        MobileNo:'',
        EmailId:'',
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
      <form class="container">
      <p class="title" align="center">
             <Typography component="h1" variant="h5">
              Update Employee 
              </Typography>
              </p>
              <Grid container spacing={5}>
              <Grid item xs={6}>
              <TextField 
              className={errors.FirstName.length > 0 ? "error" : null}
              name="FirstName" 
              label="First Name" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.FirstName} />
             <div className="error">{errors.FirstName.length > 0 && (<span className="errorMessage">{errors.FirstName}</span>)} 
             </div> 
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={errors.LastName.length > 0 ? "error" : null}
              name="LastName" 
              label="Last Name" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.LastName} />    
              <div className="error">{errors.LastName.length > 0 && (<span className="errorMessage">{errors.LastName}</span>)} 
            </div>         
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={errors.Gender.length > 0 ? "error" : null}
              name="Gender" 
              label="Gender" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.Gender} />
              <div className="error">{errors.Gender.length > 0 && (<span className="errorMessage">{errors.Gender}</span>)} 
            </div> 
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={errors.PhoneNumber.length > 0 ? "error" : null}
              name="PhoneNumber" 
              label="Phone Number" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.PhoneNumber} />
              <div className="error">{errors.PhoneNumber.length > 0 && (<span className="errorMessage">{errors.PhoneNumber}</span>)} 
            </div>
              </Grid>

              <Grid item xs={6}>
              <TextField 
              className={errors.EmailId.length > 0 ? "error" : null}
              name="EmailId" 
              label="Email Id" 
              variant="outlined" 
              onChange={this.handleChange} 
              value={this.state.EmailId} />
              <div className="error">{errors.EmailId.length > 0 && (<span className="errorMessage">{errors.EmailId}</span>)} 
            </div> 
               </Grid>

              <Grid item xs={6}>
              <TextField 
               className={errors.City.length > 0 ? "error" : null}
               name="City" 
               label="City" 
               variant="outlined" 
               onChange={this.handleChange} 
               value={this.state.City} />
               <div className="error">{errors.City.length > 0 && (<span className="errorMessage">{errors.City}</span>)} 
            </div> 
              </Grid>

              <Grid item xs={12} className="footers">
                  <div className="btn">
              <Button variant="contained" color="primary" onClick={this.update}  className="submit"> Submit </Button>
              </div>
               </Grid>
               </Grid>
              </form>
    );
  }
}