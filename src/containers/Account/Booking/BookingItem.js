import React, { Component } from 'react';
import classes from './BookingItem.module.css';

class BookingItem extends Component {
    render() {
        
        
        return (
            <div className={classes.BookingItem}>
               Name: {this.props.options.name.value} <br />
               Phone: {this.props.options.phone.value} <br />
               Time: {this.props.options.time.value} <br />
               People: {this.props.options.people.value} <br />
               Highchair:  {this.props.options.highChair.value} <br />
               Smoking:  {this.props.options.smoking.value} <br />
               

            </div>

        );
        
    }

}

export default BookingItem;