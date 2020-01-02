import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Auth from './containers/Auth/Auth';


class App extends Component {
    state = {}
    render() {

        // let routes = (
        //     <Switch>
        //         <Route path="/auth" component={Auth} />
        //         <Route path="/" exact component={Slider} />
        //         <Route path="/order" component={Order} />
        //         <Route path="/booking" component={Booking} />
        //         <Redirect to="/" />
        //     </Switch>
        // )
        return ( 
            <div>
                <Layout>
                    {/* {routes} */}
                </Layout>
            </div>
        );
    }
}

export default App;