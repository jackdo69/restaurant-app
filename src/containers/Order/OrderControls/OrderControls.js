import React from 'react';
import { connect } from 'react-redux';

const OrderControls = () => {
    return (
        <h2>OrderControls</h2>
    );
}

const mapStateToProps = state => {
    return {
        foods: state.foods
    }
}

export default connect(mapStateToProps, null)(OrderControls);