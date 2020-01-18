import React from 'react';
import classes from './BookingConfirmItem.module.css';

const bookingConfirmItem = (props) => {
    return ( 
        <div className={classes.BookingConfirmItem}>
            <div><b>{props.label}</b></div>
            <div>{props.value}</div>
              
        </div>
     );
}
 
export default bookingConfirmItem;