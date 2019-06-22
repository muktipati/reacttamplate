import React from 'react'
import { withStyles } from 'material-ui/styles';
import './Dashboard.css';
//import { classes } from 'istanbul-lib-coverage';

// const styles= ()=>({
//   dashboardContainer:{

//   }
// })

class Dashboard extends React.Component{
  render(){
    //const {classes} = this.props
    return (
      // <div className={classes.dashboardContainer}>This is Dashboard</div>
      <div className='Dashboard'>This is Dashboard</div>
    )
  }
}

export default withStyles()(Dashboard)