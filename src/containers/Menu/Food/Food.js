import React, { Component } from 'react';
import classes from './Food.module.css';


class Food extends Component {
    render() {
        return (
            <div 
                className={classes.Food}
                onClick={this.props.clicked}>               
                <img src={this.props.imgURL} alt='' />
                <h4>{this.props.id}. {this.props.name}</h4>
                <p> {this.props.description.substring(0, 55)}....</p>
                <div className={classes.Price}>$ {this.props.price}</div>
            </div>
        )
    }
}

export default Food;