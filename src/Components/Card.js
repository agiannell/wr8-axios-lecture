import React from 'react';

// props is destructured below
const Card = ({name, img}) => {
    return(
        <div className="card">
            <div>{name}</div>
            <img alt={name} src={img} />
        </div>
    )
}

export default Card;