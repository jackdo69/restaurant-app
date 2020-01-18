import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Input from '../../components/Input/Input';
import classes from './Booking.module.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import BookingConfirm from './BookingConfirm/BookingConfirm';

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
                    minLength: 10,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            people: {
                label: 'Number of guess:',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
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
                        { value: 'no', displayValue: 'No' },
                        { value: 'yes', displayValue: 'Yes' }
                    ]
                },
                value: 'No',
                validation: {},
                valid: true,
                touched: false
            },
            highChair: {
                label: 'High chair:',
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'no', displayValue: 'No' },
                        { value: 'yes', displayValue: 'Yes' }
                    ]
                },
                value: 'No',
                validation: {},
                valid: true,
                touched: false
            }
        },
        formIsValid: false,
        showModal: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

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

        let formValidation = true;
        formValidation = Object.keys(updatedBookingForm).every((key)=>{
            return updatedBookingForm[key].valid
        })
        
        this.setState({ bookingForm: updatedBookingForm, formIsValid: formValidation })
    }

    bookingHandler = (event) => {
        event.preventDefault();
        const bookingData = {};
        for (let key in this.state.bookingForm) {
            bookingData[key] = this.state.bookingForm[key]
        }
        const booking = {
            booking: bookingData,
            userId: localStorage.getItem('userId')
        }
        this.props.onSubmitBooking(booking)
        this.props.history.push('/account');
    }

    onConfirm = (event) => {
        event.preventDefault();
        this.setState({ showModal: true })  
        
        
    }

    bookingCancel = () => {
        this.setState({ showModal: false })
    }

    render() {
        // console.log(this.state.formIsValid);
        let bookingConfirm = null;
        if (this.state.bookingForm.name.value) (
            bookingConfirm = (
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.bookingCancel}>
                    <BookingConfirm
                        details={this.state.bookingForm}
                        cancel={this.bookingCancel}
                        proceed={this.bookingHandler} />
                </Modal>
            )
        )


        let authRedirect = null;
        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to='/auth' />
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
                    click={this.onConfirm}>MAKE BOOKING</Button>
            </form>
        )

        return (
            <Aux>
                <div className={classes.Booking}>
                    {authRedirect}
                    <h2>Make a reservation!</h2>
                    {form}
                    {bookingConfirm}
                </div>
            </Aux>

        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onSubmitBooking: (bookingData) => dispatch(actions.submitBooking(bookingData))
    }
}


export default connect(null, mapDispatchToProps)(Booking);