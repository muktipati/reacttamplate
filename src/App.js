import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
//import HelloWorld from './components/hello-world';
import AppLayout from './containers/AppLayout/AppLayout';
import Dashboard from './containers/Dashboard/Dashboard'
import Tab1 from './containers/Tab1/Tab1';
import Tab2 from './containers/Tab2/Tab2';
import TripView from './containers/TripView/TripView'
import TripConfiguration from './containers/TripConfiguration/TripConfiguration';
import VehicleView from './containers/VehicleView/VehicleView'

import { Router, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {history}=this.props

    return (
      <Router history={history}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/500" name="Page 500" render={props => (<div>500 Page</div>)} />
              
              <Route 
                path="/dashboard" 
                name="Dashboard" 
                render={props => 
                  <AppLayout {...props} history={history}>
                
                    <Dashboard {...props} history={history}/> 
                    
                   
                  </AppLayout>
                }
              />
              <Route 
                path="/trip-view" 
                name="TripView" 
                render={props => 
                  <AppLayout {...props} history={history}>
                    <TripView {...props} history={history}/> 
                  </AppLayout>
                } 
              />
               <Route 
                path="/vehicle-view" 
                name="VehicleView" 
                render={props => 
                  <AppLayout {...props} history={history}>
                    <VehicleView {...props} history={history}/> 
                  </AppLayout>
                } 
              />
                <Route 
                path="/tab2" 
                name="Tab2" 
                render={props => 
                  <AppLayout {...props} history={history}>
                    <Tab2 {...props} history={history}/> 
                  </AppLayout>
                }
              />
               <Route 
                path="/tripConfiguration" 
                name="TripConfiguration" 
                render={props => 
                  <AppLayout {...props} history={history}>
                    <TripConfiguration {...props} history={history}/> 
                  </AppLayout>
                }
              />
              <Route 
                path="/tab1" 
                name="tab2" 
                render={props => 
                  <AppLayout {...props} history={history}>
                    <Tab1 {...props} history={history}/> 
                  </AppLayout>
                }
              />

              
              <Route 
                path="/" 
                name="Home" 
                render={props => 
                  <AppLayout {...props} history={history}/>
                } 
              />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default hot(App);
