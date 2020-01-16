import React, { Component } from 'react';
import Food from './Food/Food'
import { connect } from 'react-redux';
import classes from './Menu.module.css';
import * as actions from '../../store/actions/actionTypes';

class Menu extends Component {

    render() {
        let foodDisplay = null;
        if (this.props.foodDisplay) {
            foodDisplay = (
                <div className={classes.Display}>
                    <div className={classes.Img}>
                        <img src={this.props.foodDisplay[0].imgURL} alt='' /></div>
                    <div className={classes.Text}>
                        <h3>{this.props.foodDisplay[0].name}</h3> 
                        
                        {this.props.foodDisplay[0].description}
                    </div>

                </div>
            )
        } else {
            foodDisplay = <h2>Our menu</h2>
        }
        return (
            <div className={classes.wrapper}>
                {foodDisplay}
                <div className={classes.Menu}>
                    {this.props.foods.map(food => (
                        <Food
                            key={food.id}
                            clicked={() => this.props.display(food.id)}
                            imgURL={food.imgURL}
                            id={food.id}
                            name={food.name}
                            description={food.description}
                            price={food.price} />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        foods: state.food.foods,
        foodDisplay: state.food.display
    }
}

const mapDispatchToProps = dispatch => {
    return {
        display: (id) => dispatch({ type: actions.DISPLAY, id })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu);