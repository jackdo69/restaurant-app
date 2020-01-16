import React, { Component } from 'react';
import Food from './Food/Food'
import { connect } from 'react-redux';
import classes from './Menu.module.css';

class Menu extends Component {

    render() {
        return (

           <div className={classes.wrapper}>
               <h2 >Our menu</h2>
               <div className={classes.Menu}>
                    {this.props.foods.map(food => (
                        <div className={classes.Food}>
                            <Food
                                imgURL={food.imgURL}
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                description={food.description}
                                price={food.price} />
                        </div>
                    ))}
                </div>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        foods: state.food.foods
    }
}



export default connect(mapStateToProps)(Menu);