import React, { Component } from 'react';
import classes from './Auth.module.css';
import Input from '../../components/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {Redirect} from 'react-router-dom';
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
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
            }
        },
        isSignup: false
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
                value: event.target.value
            }
        }
        this.setState({
            controls: updatedControls
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