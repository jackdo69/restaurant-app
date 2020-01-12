import React, { Component } from 'react';
import OrderControls from './OrderControls/OrderControls';
import OrderSummary from './OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';

class Order extends Component {
    
    render() { 
        let authRedirect = null;
        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        return ( 
            <Aux>
                {authRedirect}
                <OrderSummary />
                <OrderControls />
                <button
                    onClick={this.props.logout}>SIGN OUT</button>
            </Aux>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);