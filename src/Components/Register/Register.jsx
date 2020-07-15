import React from "react";
import "./Register.scss";


export class Register extends React.Component {
  constructor(props) {
    super(props);
     this.state={
      EmployeeName:'',
      Username:'',
      Password:'',
      Gender:'',
      City:'',
      EmailID:'',
      Designation:'',
      WorkingExperience:''
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  

  register=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      EmployeeName:this.state.EmployeeName,
      Username:this.state.Username,
      Password:this.state.Password,
      Gender:this.state.Gender,
      City:this.state.City,
      EmailID:this.state.EmailID,
      Designation:this.state.Designation,
      WorkingExperience:this.state.WorkingExperience
    }
    
  }
  render() 
  {
    return (
        <div className="logo">
            <div class="login-box"  align="center">
                <h1>Register</h1>
                    <form>
                        <p>Employee Name</p>
                            <input type="text" name="EmployeeName" onChange={this.handleChange} value={this.state.EmployeeName} placeholder="Enter Employee Name" />
                        <p>Username</p>
                            <input type="text" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter Username" />
                        <p>Password</p>
                            <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" />
                        <p>Gender</p>
                            <input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="Enter Gender" />
                        <p>City</p>
                            <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter City" />
                        <p>EmailID</p>
                            <input type="text" name="EmailID" onChange={this.handleChange} value={this.state.EmailID} placeholder="Enter Email Address" />
                        <p>Designation</p>
                            <input type="text" name="Designation" onChange={this.handleChange} value={this.state.Designation} placeholder="Enter Designation" />
                        <p>WorkingExperience</p>
                            <input type="text" name="WorkingExperience" onChange={this.handleChange} value={this.state.WorkingExperience} placeholder="Enter Working Experience" />
                        <div className="footer" align="center">
                            <button type="button" onClick={this.register} className="btn btn-success">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}