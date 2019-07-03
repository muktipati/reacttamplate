import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
//import HelloWorld from './components/hello-world';
import AppLayout from './containers/AppLayout/AppLayout';
import Dashboard from './containers/Dashboard/Dashboard'
import Tab1 from './containers/Tab1/Tab1';
import Tab2 from './containers/Tab2/Tab2';
import TripView from './containers/TripView/TripView'
import TripConfiguration from './containers/TripConfiguration/TripConfiguration';
import VehicleRegScheme from './containers/VehicleRegScheme/VehicleRegScheme';
import VehicleView from './containers/VehicleView/VehicleView';
import Login from './containers/Login/Login';
import Recovery from './containers/Login/Recovery';
import ResetPassword from './containers/Login/ResetPassword'
import Otp from './containers/Login/Otp';
import SignUp from './containers/Login/SignUp'

import { Router, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { history } = this.props

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

                  <Dashboard {...props} history={history} />


                </AppLayout>
              }
            />
            <Route
              path="/trip-view"
              name="TripView"
              render={props =>
                <AppLayout {...props} history={history}>
                  <TripView {...props} history={history} />
                </AppLayout>
              }
            />
            <Route
              path="/vehicle-view"
              name="VehicleView"
              render={props =>
                <AppLayout {...props} history={history}>
                  <VehicleView {...props} history={history} />
                </AppLayout>
              }
            />
            <Route
              path="/tab2"
              name="Tab2"
              render={props =>
                <AppLayout {...props} history={history}>
                  <Tab2 {...props} history={history} />
                </AppLayout>
              }
            />
            <Route
              path="/tripConfiguration"
              name="TripConfiguration"
              render={props =>
                <AppLayout {...props} history={history}>
                  <TripConfiguration {...props} history={history} />
                </AppLayout>
              }
            />
             <Route
              path="/vehicle-reg-scheme"
              name="VehicleRegScheme"
              render={props =>
                <AppLayout {...props} history={history}>
                  <VehicleRegScheme {...props} history={history} />
                </AppLayout>
              }
            />
            <Route
              path="/tab1"
              name="tab2"
              render={props =>
                <AppLayout {...props} history={history}>
                  <Tab1 {...props} history={history} />
                </AppLayout>
              }
            />

            <Route
              path="/otp"
              name="otp"
              render={props =>
                <Otp {...props} history={history} />
              }
            />

            <Route
              path="/recovery"
              name="Recovery"
              render={props =>
                <Recovery {...props} history={history} />
              }
            />
            <Route
              path="/resetPassword"
              name="resetPassword"
              render={props =>
                <ResetPassword {...props} history={history} />
              }
            />
             <Route
              path="/signup"
              name="signUp"
              render={props =>
                <SignUp {...props} history={history} />
              }
            />

            <Route
              path="/"
              name="login"
              render={props =>
                <Login {...props} history={history} />
              }
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default hot(App);
