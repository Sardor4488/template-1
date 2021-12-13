import React from 'react';
import ReactStars from "react-rating-stars-component";


const Ratings = (props) => {
    let ratings = {
        classNames:"inline-class",
        size: 14,
        value: props.rating || 0,
        edit: false,
        activeColor: "#FFD700",
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            props.ratingnewvalue(newValue);
        }
    };

    return <div className="inline-class"><ReactStars {...ratings}/></div>
    
}

export default Ratings;