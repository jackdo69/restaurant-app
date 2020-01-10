import React, { Component } from 'react';
import classes from './Auth.module.css';
import Input from '../../components/Input/Input';

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
        }
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
        ))
        return ( 
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <button>SUBMIT</button>
                </form>
                <button
                clicked={this.switchAuthModeHandler}>SWITCH MODE</button>
            </div>
         );
    }
}
 
export default Auth;