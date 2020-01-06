import React, { Component } from 'react';
import Food from '../../components/Food/Food'
import {connect} from 'react-redux';

class Menu extends Component {
    
    render() { 
        return ( <div>
            {this.props.foods.map(food => (
                <Food 
                key={food.id}
                id={food.id}
                name={food.name}
                description={food.description} />

            ))}
        </div> );
    }
}

const mapStateToProps = state => {
    return {
        foods: state.food.foods
    }
}


 
export default connect(mapStateToProps)(Menu);