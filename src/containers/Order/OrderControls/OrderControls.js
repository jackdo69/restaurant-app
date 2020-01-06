import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderControls extends Component {
    
    render() {
        return (
            <div>{this.props.foods}</div>
        );
    }

}

const mapStateToProps = state => {
    return {
        foods: state.foods
    }
}

export default connect(mapStateToProps, null)(OrderControls);