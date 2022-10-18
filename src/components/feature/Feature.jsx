import React from 'react';
import './Feature.css'

const Feature = (props) => {
    const {title, text} = props;
    return (
        <div className='gpt3__features-container__feature'>
           <div className="gpt3__features-container__feature-title">
                <div/>
                <h1>{title}</h1>
           </div>
           <div className="gpt3__features-container__feature-text">
                <p>{text}</p>
           </div>
        </div>
    );
};

export default Feature;