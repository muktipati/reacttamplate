import React from 'react';
//import { withStyles } from 'material-ui/styles';

// import { classes } from 'istanbul-lib-coverage';
import TopNavBar from '../TopNavBar/TopNavBar';
import MainView from '../MainVIew/MainView';
import SideNavBar from '../SideNavBar/SideNavBar';

import './AppLayout.css';

import '../../style/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import {
   faCheckSquare, 
  faCoffee, 
  faAngleDown,
  faBell,
  faUser,
  faCog,
  faArrowRight,
  faExclamationTriangle
 } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faAngleDown,faArrowRight,faBell,faUser,faCog);
library.add(fas,faExclamationTriangle);
// library.add(far);

// const style = () => ({
//   applayout: {
//     margin: '0 !important',
//     padding: '0 !important',
//     boxSizing: 'border-box',
//     position: 'relative',
//     height: '100vh',
//     width: '100vw',
//     overflow: 'hidden',
//     textAlign: 'center',
//     //margin: '-8px',
//     fontFamily: 'Roboto, sans-serif',
//   },

// });

class Applayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openSideDrawer: true,
    };
  }
  
  render() {
    const { children, history } = this.props;
    return (
      <div className='AppLayout'>
        <TopNavBar
          toggleSideNav={() =>
            this.setState({ openSideDrawer: !this.state.openSideDrawer })
          }
          openSideDrawer={this.state.openSideDrawer}
          history={history}
        />
        <div className='mainBody'>
          <SideNavBar openSideDrawer={this.state.openSideDrawer} history={history}/>
          <MainView history={history}>
            {children || ''}
          </MainView>
        </div>
      </div>
    );
  }
}

export default Applayout;
