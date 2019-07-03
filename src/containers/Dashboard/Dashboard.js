import React from 'react'
import { withStyles } from 'material-ui/styles';
import './Dashboard.css';
import Header from '../../components/UI/Header/Header';
import Auxi from "../../hoc/Auxi/Auxi";


class Dashboard extends React.Component{
  render(){
    //const {classes} = this.props
    return (
      <Auxi>

      <Header title='DASHBOARD' />
     <div className='Dashboard-body'>
     <button className='btn btn-danger'>Create DashBoard</button>
     </div>

      </Auxi>
    )
  }
}

export default withStyles()(Dashboard)