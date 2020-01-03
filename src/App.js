import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
//use for react-router-dom
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Slider from './components/Slider/Slider';
import Order from './containers/Order/Order';
import Booking from './containers/Booking/Booking';


class App extends Component {
    state = {}
    render() {

        let routes = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={Slider} />
                <Route path="/order" component={Order} />
                <Route path="/booking" component={Booking} />
                <Redirect to="/" />
            </Switch>
        )
        return ( 
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);