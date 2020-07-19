import React from 'react';
import "./DeleteEmployee.scss";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
export class DeleteEmployee extends React.Component 
{

    render()
    {
        return(
            <div className="logincontainer "  >
                <p class="title" align="center">
                    <Typography component="h1" variant="h5">
                    Delete_Employee_By_Id
                    </Typography>
                </p>
                <div className="text"  >
                    <TextField 
                         variant="outlined"
                         required
                         label="Employee ID"
                         name="Employee ID"
                         autoFocus/>
                </div>
                <div id="btn" align="center">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.login} 
                        className="btn">
                        Delete
                    </Button>
                </div>
                
            </div>
              
            

        );
    }
}