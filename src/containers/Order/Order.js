import React, { Component } from 'react';
import OrderControls from './OrderControls/OrderControls';
import OrderSummary from './OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import classes from './Order.module.css';
import Button from '../../components/Button/Button';


class Order extends Component {

    orderHandler = (event) => {
        event.preventDefault();
        const order = {
            foods: this.props.foods,
            userId: this.props.userId
        }
        this.props.onSubmitOrder(order)
        this.props.history.push('/account');
        this.props.clearOrder();
    }

    // componentDidUpdate() {
    //     this.props.clearOrder();
    // }

    render() {
        
        let authRedirect = null;
        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <Aux>         
                <div className={classes.Order}>
                    <h2 align="center">Order Takeaway</h2>
                    {authRedirect}
                    <OrderSummary />
                    <OrderControls />
                    <Button
                        disabled={!this.props.foods.length}
                        btnType='Success'
                        click={this.orderHandler}>PLACE ORDER</Button>
                </div>

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath,
        foods: state.order.foods,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitOrder: (orderData) => dispatch(actions.submitOrder(orderData)),
        clearOrder: () => dispatch(actions.clearOrders())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Order);