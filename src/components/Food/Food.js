import React, { Component } from 'react';
import classes from './Food.module.css';


class Food extends Component {
    render() {
        console.log(this.props.imgURL);

        return (
            <div className={classes.Food}>
                <div className={classes.item1}>
                <img src={this.props.imgURL} alt='' />
                </div>
                <div className={classes.item2}>
                <h4>{this.props.name}</h4>
                </div>
                <div className={classes.item3}>
                <p> {this.props.description}</p>
                </div>  
            </div>
        )
    }
}

export default Food;