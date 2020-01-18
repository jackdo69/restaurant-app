import React, { Component } from 'react';
import classes from './BookingConfirm.module.css';
import Button from '../../../components/Button/Button';
import BookingConfirmItem from './BookingConfirmItem/BookingConfirmItem';

class BookingConfirm extends Component {

    render() {
        let details = this.props.details;
        // Object.keys(details).map(key=> {
        //     let label = Object.keys(details[key])[0]
        //     console.log(details[key].label);
        //     console.log(details[key][Object.keys(details[key])[0]]);
        //     console.log(details[key].value)
        // }
            
            
            
            
        // )
        return (
            
            <div className={classes.BookingConfirm}>
                <h3>Your booking:</h3>
                {Object.keys(details).map(key => (
                    <BookingConfirmItem 
                    value={details[key].value}
                    key={details[key][Object.keys(details[key])[0]]}        
                    label={details[key][Object.keys(details[key])[0]]}/>
                ))}
                <Button click={this.props.cancel} btnType='Danger'>Cancel</Button>
                <Button click={this.props.proceed} btnType='Success'>Proceed</Button>

            </div>
        );
    }
}

export default BookingConfirm;