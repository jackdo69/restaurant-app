import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
//use for react-router-dom
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from './containers/Auth/Auth';
import Order from './containers/Order/Order';
import Booking from './containers/Booking/Booking';
import Menu from './containers/Menu/Menu';
import Header from './components/Header/Header';
import Logout from './components/Logout/Logout';
import Account from './containers/Account/Account';
import * as actions from './store/actions/index';


class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {

        let routes = (
            <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/account" component={Account} />
                <Route path="/auth" component={Auth} />
                <Route path="/menu" component={Menu} />
                <Route path="/" exact component={Header} />
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

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));