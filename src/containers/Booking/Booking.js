import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Input from '../../components/Input/Input';
import classes from './Booking.module.css';
import * as actions from '../../store/actions/index';

class Booking extends Component {
    state = {
        bookingForm: {
            name: {
                label: 'Name:',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            phone: {
                label: 'Phone number:',
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Your phone number'
                },
                value: ''
            },
            people: {
                label: 'Number of guess:',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    min: '1',
                    max: '15',
                    placeholder: ''
                },
                value: ''
            },
            time: {
                label: 'Date and time:',
                elementType: 'input',
                elementConfig: {
                    type: 'datetime-local',
                    placeholder: 'Your name'
                },
                value: ''
            },
            smoking: {
                label: 'Smoking:',
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'yes', displayValue: 'Yes' },
                        { value: 'no', displayValue: 'No' }
                    ]
                },
                value: 'no'
            },
            highChair: {
                label: 'High chair:',
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'yes', displayValue: 'Yes' },
                        { value: 'no', displayValue: 'No' }
                    ]
                },
                value: 'no'
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => { 
        const updatedBookingForm = {...this.state.bookingForm}
        const updatedFormElement = {...updatedBookingForm[inputIdentifier]}
        updatedFormElement.value = event.target.value;
        updatedBookingForm[inputIdentifier] = updatedFormElement;
        this.setState({bookingForm: updatedBookingForm})
    }

    bookingHandler = (event) => {
        event.preventDefault();
        const bookingData = {};
        for (let key in this.state.bookingForm) {
            bookingData[key] = this.state.bookingForm[key]
        }
        const booking = {
            booking: bookingData,
            userId: this.props.userId
        }
        this.props.onSubmitBooking(booking)
     }

    render() {
        let authRedirect = null;

        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        const formElementsArray = [];
        for (let key in this.state.bookingForm) {
            formElementsArray.push({
                id: key,
                config: this.state.bookingForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => (

                    <Input
                        label={formElement.config.label}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />

                ))}
                <button
                    onClick={this.bookingHandler}>Make booking</button>
            </form>
        )

        return (
            <Aux>
                <div className={classes.Booking}>
                    {authRedirect}
                    <h2>Make a reservation!</h2>
                    {form}

                    <NavLink
                        to="/logout">SIGN OUT</NavLink>
                </div>
            </Aux>

        );
    }
}



const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitBooking: (bookingData) => dispatch(actions.submitBooking(bookingData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Booking);