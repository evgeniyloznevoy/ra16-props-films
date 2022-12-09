import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function countStars(count) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(i);
    }
    return array;
}

const Stars = ({count}) => {

    return (
        typeof count === 'number' && count > 0 && count < 6 && (
            <ul className="card-body-stars u-clearfix">
                {countStars(count).map((key) => (
                    <Star key={key}/>
                ))}
            </ul>
        )
    );
};

Stars.propTypes = {
    count: PropTypes.number,
};

export default Stars;