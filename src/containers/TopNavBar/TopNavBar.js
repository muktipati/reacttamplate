import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
//import MenuIcon from 'material-ui-icons/Menu';
import './TopNavBar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from '../../assets/image/baseline-menu-24px.svg';
import FontIcon from '../../containers/common/FontIcon'
//import styles from '../../style/style.css';

const style = () => ({
  topNavBar: {
    width: '100vw',
    height: '60px',
    display: 'flex',
    flexFlow: 'row',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important',
    

  },
  companyLogoHolder: {
    width: 200,
    height: '100%',
    backgroundColor: '#dd3333',
  },
  autotat: {
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    lineHeight: '57px',
    fontSize: '20px',
    color: 'white',

  }
});
class TopNavBar extends React.Component {
  render() {
    const { classes, toggleSideNav, openSideDrawer } = this.props;
    return (
      <div className={classes.topNavBar}>
        <div
          className={classnames(
            classes.companyLogoHolder,
            openSideDrawer
              ? 'company-logo-open'
              : 'company-logo-closed',
          )}
        >
          <p className={classes.autotat}>{openSideDrawer ? 'autoTAT' : 'ATAT'}</p>
        </div>
        <div className='manucontain'>
          <div onClick={() => toggleSideNav()}>
            <img
              className={classnames(
                'menubar',
                openSideDrawer ? 'rotate-right' : 'rotate-left',
              )}
              src={MenuBar}
              alt=''
            />
            {/* <i className="fa fa-star" style={{ height: 100, width: 100 }} /> */}
          </div>
          <div>
            <div className="search">
              <span className="fa fa-search"></span>
              <input type="text" className="form-control" placeholder="search" />
            </div>

          </div>
          <div className="flex-grow"/>
          <div className="margin-right10">
           <div className="padding10">
               <FontIcon icon={'bell'}  size={20}/>
               <span className="badgetop badge-header">3</span>
           </div>
           <div className='user-icon'>
             <div className='user'>
             <FontIcon icon={'user'}  size={20}/>
             </div>
           </div>
           <div className='user-name'>
            <p>Hi,John</p>
            <FontIcon icon={'angle-down'} size={20}/>
           </div>
           <div className='seeting-icon'>
           
            <FontIcon icon={'cog'} size={20}/>
           </div>
           
          </div>
        </div>
        

      </div>
    );
  }
}

export default withStyles(style)(TopNavBar);
