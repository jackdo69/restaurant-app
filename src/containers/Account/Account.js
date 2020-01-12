import React, { Component } from 'react';
import classes from './Account.module.css';
import {connect} from 'react-redux';

class Account extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={classes.Account}>
    <h2>Welcome back! {this.props.email}</h2>
            </div>
            
         );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}
 
export default connect(mapStateToProps,null)(Account);