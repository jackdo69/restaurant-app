import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Input from '../../components/Input/Input';
import classes from './Booking.module.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/Button/Button';

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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                label: 'Phone number:',
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Your phone number'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true,
                    minLength: 8,
                    maxLength: 8
                },
                valid: false,
                touched: false
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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            time: {
                label: 'Date and time:',
                elementType: 'input',
                elementConfig: {
                    type: 'datetime-local',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
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
        },
        formIsValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) { return true; }
        if (rules.required) { isValid = value.trim() !== '' && isValid; }
        if (rules.minLength) { isValid = value.length >= rules.minLength && isValid }
        if (rules.maxLength) { isValid = value.length <= rules.maxLength && isValid }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedBookingForm = { ...this.state.bookingForm }
        const updatedFormElement = { ...updatedBookingForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedBookingForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedBookingForm) {
            formIsValid = updatedBookingForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ bookingForm: updatedBookingForm, formIsValid: formIsValid })
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
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />

                ))}
                <Button
                    disabled={!this.state.formIsValid}
                    btnType='Success'
                    click={this.bookingHandler}>MAKE BOOKING</Button>
            </form>
        )

        return (
            <Aux>
                <div className={classes.Booking}>
                    {authRedirect}
                    <h2>Make a reservation!</h2>
                    {form}

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