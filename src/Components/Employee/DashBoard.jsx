import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./DashBoard.scss";

export class DashBoard extends React.Component {
    constructor(props) {
      super(props);
     
    }
render() 
    {
      return (
          <div className="body">
                     <p class="title" align="center">
                        <Typography component="h3" variant="h5">
                            Employee DashBoard
                        </Typography>
                    </p>
                    <div className="button" align="center">
                        <Button variant="contained" color="primary">
                            Add Employee
                        </Button>
                    </div>
                    <div className="button" align="center">
                        <Button variant="contained" color="primary">
                            Update Employee
                        </Button>
                    </div>
                    <div className="button" align="center">
                        <Button variant="contained" color="primary">
                            Delete Employee
                        </Button>
                    </div>
                    <div className="button" align="center">
                        <Button variant="contained" color="primary">
                            Get All Employee
                        </Button>
                    </div>
                    <div className="button"align="center">
                        <Button variant="contained" color="primary">
                            Get Employee by Id
                        </Button>
                    </div>
            </div>
      );
    }
}