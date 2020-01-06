import React from 'react';

const food = (props) => (
    <div>
        <h4>{props.name}</h4>
        <p>{props.id} &nbsp; {props.description}</p>
    </div>
)

export default food;