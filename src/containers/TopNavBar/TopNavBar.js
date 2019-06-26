import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
//import MenuIcon from 'material-ui-icons/Menu';

import MenuBar from '../../assets/image/baseline-menu-24px.svg';
//import styles from '../../style/style.css';

const style = () => ({
  topNavBar: {
    width: '100vw',
    height: '60px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#dd3333',
    alignItems: 'baseline'
  },
  companyLogoHolder: {
    width: 200,
    height: '100%',
    backgroundColor: '#bf090',
  },
  autotat :{
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
           <p  className={classes.autotat}>{openSideDrawer?'AutoTAT':'ATAT'}</p>
        </div>
        <div onClick={() => toggleSideNav()}>
          <img
            className={classnames(
             'menubar',
              openSideDrawer ? 'rotate-right' : 'rotate-left',
            )}
            src={MenuBar}
            alt=''
          />
          <i className="fa fa-star" style={{ height: 100, width: 100 }} />
        </div>
        <div class="form-group">
          <input className="form-control" type="text" placeholder='Search...'/>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(TopNavBar);
