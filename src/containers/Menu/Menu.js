import React, { Component } from 'react';
import Food from '../../components/Food/Food'
import { connect } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import Aux from '../../hoc/Aux/Aux';
import classes from './Menu.module.css';

class Menu extends Component {

    render() {
        return (

        <Aux>
            <Slider />
            <div className={classes.Menu}>
                <div className={classes.Food}>
                {this.props.foods.map(food => (
                <Food
                    imgURL={food.imgURL}
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    description={food.description} />))}
                </div>
            
        </div>
        </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        foods: state.food.foods
    }
}



export default connect(mapStateToProps)(Menu);