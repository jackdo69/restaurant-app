import React, { Component } from 'react';
import classes from './Auth.module.css';
import Input from '../../components/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import Button from '../Button/Button';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false,
        isValid: false
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

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            }
        })
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        let isValid = true;
        for (let key in updatedControls) {
            isValid = updatedControls[key].valid && isValid;
        }
        this.setState({
            controls: updatedControls,
            isValid: isValid
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value,
            this.state.isSignup
        )
    }


    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/account' />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                <h2>{this.state.isSignup ? 'SIGN UP' : 'LOG IN'}</h2>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button
                        btnType='Success'
                        onClick={this.submitHandler}>SUBMIT</Button>
                </form>
                <Button
                    disabled={!this.state.isValid}
                    btnType='Danger'
                    click={this.switchAuthModeHandler}>
                    Switch to {!this.state.isSignup ? 'Sign up' : 'Log in'}</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);