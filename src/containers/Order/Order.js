import React, { Component } from 'react';
import OrderControls from './OrderControls/OrderControls';
import OrderSummary from './OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import classes from './Order.module.css';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import OrderConfirm from './OrderConfirm/OrderConfirm'


class Order extends Component {
    state = {
        showModal: false
    }

    orderHandler = () => {
        const order = {
            foods: this.props.foods,
            userId: this.props.userId
        }
        this.props.onSubmitOrder(order)
        this.props.history.push('/account');
        this.props.clearOrder();
    }

    onConfirm = () => {
        this.setState({ showModal: true })
    }

    purchaseCancel = () => {
        this.setState({ showModal: false })
    }

    render() {
        let orderConfirm = null;
        if(this.props.foods.length) {
            orderConfirm = (
                <Modal 
                show={this.state.showModal}
                modalClosed={this.purchaseCancel}>
                    <OrderConfirm 
                        foods={this.props.foods}
                        cancel={this.purchaseCancel}
                        proceed={ this.orderHandler}/>
                </Modal>
            )
        }

        let authRedirect = null;
        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <Aux>
                <div className={classes.Order}>
                    <h2 align="center">Order Takeaway</h2>
                    {authRedirect}
                    {orderConfirm}
                    <OrderSummary />
                    <OrderControls />
                    <Button
                        disabled={!this.props.foods.length}
                        btnType='Success'
                        click={this.onConfirm}>PLACE ORDER</Button>
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
